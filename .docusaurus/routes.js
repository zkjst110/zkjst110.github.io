import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'eb6'),
    routes: [
      {
        path: '/docs/1.1.0',
        component: ComponentCreator('/docs/1.1.0', '8fa'),
        routes: [
          {
            path: '/docs/1.1.0',
            component: ComponentCreator('/docs/1.1.0', 'afa'),
            routes: [
              {
                path: '/docs/1.1.0/category/tutorial---basics',
                component: ComponentCreator('/docs/1.1.0/category/tutorial---basics', 'a3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1.0/category/tutorial---extras',
                component: ComponentCreator('/docs/1.1.0/category/tutorial---extras', 'bb3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1.0/intro',
                component: ComponentCreator('/docs/1.1.0/intro', '8fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1.0/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/1.1.0/tutorial-basics/congratulations', '23a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1.0/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/1.1.0/tutorial-basics/create-a-blog-post', 'b5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1.0/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/1.1.0/tutorial-basics/create-a-document', 'cfc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1.0/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/1.1.0/tutorial-basics/create-a-page', '32e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1.0/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/1.1.0/tutorial-basics/deploy-your-site', 'b00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1.0/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/1.1.0/tutorial-basics/markdown-features', '3ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1.0/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/1.1.0/tutorial-extras/manage-docs-versions', '56f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1.0/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/1.1.0/tutorial-extras/translate-your-site', 'a95'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/1.1.1',
        component: ComponentCreator('/docs/1.1.1', 'ced'),
        routes: [
          {
            path: '/docs/1.1.1',
            component: ComponentCreator('/docs/1.1.1', '0df'),
            routes: [
              {
                path: '/docs/1.1.1/category/tutorial---basics',
                component: ComponentCreator('/docs/1.1.1/category/tutorial---basics', '6a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1.1/category/tutorial---extras',
                component: ComponentCreator('/docs/1.1.1/category/tutorial---extras', '8c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1.1/intro',
                component: ComponentCreator('/docs/1.1.1/intro', 'b63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1.1/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/1.1.1/tutorial-basics/congratulations', '204'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1.1/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/1.1.1/tutorial-basics/create-a-blog-post', '5ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1.1/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/1.1.1/tutorial-basics/create-a-document', '39e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1.1/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/1.1.1/tutorial-basics/create-a-page', '447'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1.1/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/1.1.1/tutorial-basics/deploy-your-site', 'efd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1.1/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/1.1.1/tutorial-basics/markdown-features', '9e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1.1/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/1.1.1/tutorial-extras/manage-docs-versions', '38d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1.1/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/1.1.1/tutorial-extras/translate-your-site', '7df'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/next',
        component: ComponentCreator('/docs/next', '584'),
        routes: [
          {
            path: '/docs/next',
            component: ComponentCreator('/docs/next', '85b'),
            routes: [
              {
                path: '/docs/next/category/存储服务',
                component: ComponentCreator('/docs/next/category/存储服务', '9c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/category/共识一级目录一',
                component: ComponentCreator('/docs/next/category/共识一级目录一', '6c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/category/一级目录二',
                component: ComponentCreator('/docs/next/category/一级目录二', '107'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/intro',
                component: ComponentCreator('/docs/next/intro', 'ad0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/storage',
                component: ComponentCreator('/docs/next/storage', '027'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/storage/multicache',
                component: ComponentCreator('/docs/next/storage/multicache', '1e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/next/tutorial-basics/congratulations', '63b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/next/tutorial-basics/create-a-blog-post', '2d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/next/tutorial-basics/create-a-document', '991'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/next/tutorial-basics/create-a-page', 'dcd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/next/tutorial-basics/deploy-your-site', 'b06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/next/tutorial-basics/markdown-features', 'fe4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/tutorial-basics/solo',
                component: ComponentCreator('/docs/next/tutorial-basics/solo', '617'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/next/tutorial-extras/manage-docs-versions', 'fe5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/next/tutorial-extras/translate-your-site', '704'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'fc5'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '600'),
            routes: [
              {
                path: '/docs/category/存储服务',
                component: ComponentCreator('/docs/category/存储服务', 'c8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/一级目录二',
                component: ComponentCreator('/docs/category/一级目录二', 'acd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/一级目录一',
                component: ComponentCreator('/docs/category/一级目录一', '757'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'f02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/storage',
                component: ComponentCreator('/docs/storage', '886'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/storage/multicache',
                component: ComponentCreator('/docs/storage/multicache', '1fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '744'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '9c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', '82d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '7f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'a51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', '8f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/solo',
                component: ComponentCreator('/docs/tutorial-basics/solo', '918'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'e37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '53e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
