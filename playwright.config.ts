import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
 testMatch:["Allmasters/master.ts"],
 expect:{timeout:6000},
  use: {
    headless:false,
//baseURL:"http://dev.cn.dokonaly.com/",
baseURL:"http://qa.ams.ai/",
video : "on",
screenshot : "off"
// trace:"on"
  },

reporter:[["html",{open:"on-failure"}]],
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport:{width:1366,height:649}
      },
    },

  //   // {
  //   //   name: 'firefox',
  //   //   use: {
  //   //     ...devices['Desktop Firefox'],
  //   //   },
  //   // },

    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },

  //   /* Test against mobile viewports. */
  //   // {
  //   //   name: 'Mobile Chrome',
  //   //   use: {
  //   //     ...devices['Pixel 5'],
  //   //   },
  //   // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

  //   /* Test against branded browsers. */
  //   // {
  //   //   name: 'Microsoft Edge',
  //   //   use: {
  //   //     channel: 'msedge',
  //   //   },
  //   // },
  //   // {
  //   //   name: 'Google Chrome',
  //   //   use: {
  //   //     channel: 'chrome',
  //   //   },
  //   // },
  ],
  
};

export default config;
