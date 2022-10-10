import path from 'path';
import fs from 'fs';
import deepMerge from 'deepmerge';

type ParentSchema = Record<string, unknown | string>;

interface Schema {
  parent: string;
}

function getSchemaPath(schemaFolderName: string): string {
  return path.resolve(
    __dirname,
    '..',
    'src',
    'builders',
    schemaFolderName,
    'schema.json',
  );
}

function getSchemaDistPath(schemaFolderName: string): string {
  return path.resolve(__dirname, '..', 'dist', schemaFolderName, 'schema.json');
}

const schemaFolderNames = ['browser', 'dev-server'];

function readJsonFileAsync<T>(path: string): T {
  const schemaBuffer = fs.readFileSync(path);
  const schemaString = schemaBuffer.toString();
  return JSON.parse(schemaString) as T;
}

for (const schemaFolderName of schemaFolderNames) {
  const schemaPath = getSchemaPath(schemaFolderName);
  const { parent, ...schema } = readJsonFileAsync<Schema>(schemaPath);

  const parentSchema = readJsonFileAsync<ParentSchema>(require.resolve(parent));
  const endSchema = deepMerge(parentSchema, schema);

  const schemaDistPath = getSchemaDistPath(schemaFolderName);
  fs.writeFileSync(schemaDistPath, JSON.stringify(endSchema, null, 2));
}
