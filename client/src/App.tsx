import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/landing";
import HomePage from "@/pages/home";
import PlayerPage from "@/pages/player";
import MixerPage from "@/pages/mixer";
import SurveyPage from "@/pages/wireframes/survey";
import InterviewPage from "@/pages/wireframes/interview";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/home" component={HomePage} />
      <Route path="/player/:id" component={PlayerPage} />
      <Route path="/mixer" component={MixerPage} />
      
      {/* Wireframe/Research Routes */}
      <Route path="/wireframes/survey" component={SurveyPage} />
      <Route path="/wireframes/interview" component={InterviewPage} />
      <Route path="/wireframes/ideate" component={SurveyPage} /> {/* Placeholder */}
      <Route path="/wireframes/test" component={SurveyPage} /> {/* Placeholder */}
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;