import Route from '@ember/routing/route';


export default class LoginRoute extends Route {
  beforeModel() {
    this.transitionTo('mock-login');
  }
}
