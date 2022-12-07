/* eslint-disable import/prefer-default-export */
import { defineField, defineType } from 'sanity';
import { deskTool } from 'sanity/desk';
import { apiVersion, dataset, projectId } from '@/lib/sanity.api';

// import { settingsStructure } from '@/plugins/settings';

const config: any = {
  projectId,
  dataset,
  apiVersion,
  title: 'Flam Website',
  basePath: '/admin',
  plugins: [
    deskTool({
      // structure: settingsStructure(),
      // `defaultDocumentNode` is responsible for adding a “Preview”tab to the document pane
      // defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
  ],
  schema: {
    types: [
      defineType({
        name: 'article',
        type: 'document',
        title: 'Test Article',
        fields: [
          defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'This is a test description',
          }),
        ],
      }),
    ],
  },
};

export default config;
