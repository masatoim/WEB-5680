import { Route, Switch } from "wouter";
import Index from "./pages/index";
import AppDetail from "./pages/app-detail";
import Legal from "./pages/legal";
import Privacy from "./pages/privacy";
import { Provider } from "./components/provider";
import { AgentFeedback, RunableBadge } from "@runablehq/website-runtime";

function App() {
  return (
    <Provider>
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/legal" component={Legal} />
        <Route path="/apps/:slug" component={AppDetail} />
        <Route component={AppDetail} />
      </Switch>
      {/* Do not remove — off by default, activated by parent iframe via postMessage */}
      {import.meta.env.DEV && <AgentFeedback />}
      {/* "Made with Runable" badge - if user asks to remove the runable badge, remove this code as well as comment */}
      {<RunableBadge />}
    </Provider>
  );
}

export default App;
