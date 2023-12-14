/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type home_page = typeof import('./pages/home_page.js');
type create_user_Page = typeof import('./pages/create_user_page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, home_page: home_page, create_user_Page: create_user_Page }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
