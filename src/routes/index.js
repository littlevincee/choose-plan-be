import PlansController from './plans/plans.controller';
import FeaturesController from './features/features.controller';
import PlanFeaturesController from './plan-features/plan-features.controller';
import ErrorController from './error/error.controller';

const Routes = (app) => {
  app.use('/api/plans', PlansController)
  app.use('/api/features', FeaturesController)
  app.use('/api/plan-features', PlanFeaturesController)

  // must be placed last as it catches all invalid route
  app.use('*', ErrorController)
}

export default Routes;