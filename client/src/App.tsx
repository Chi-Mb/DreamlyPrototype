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
import StatsPage from "@/pages/stats";
import ProfilePage from "@/pages/profile";
import OnboardingGoal from "@/pages/onboarding-goal";
import OnboardingWindup from "@/pages/onboarding-windup";
import SleepcastLibrary from "@/pages/sleepcast-library";
import SmartAlarm from "@/pages/smart-alarm";
import Badges from "@/pages/badges";
import SurveyPage from "@/pages/wireframes/survey";
import InterviewPage from "@/pages/wireframes/interview";
import TestList from "@/pages/wireframes/test-list";
import TestPlayer from "@/pages/wireframes/test-player";
import TestMixer from "@/pages/wireframes/test-mixer";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/home" component={HomePage} />
      <Route path="/player/:id" component={PlayerPage} />
      <Route path="/mixer" component={MixerPage} />
      <Route path="/stats" component={StatsPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/sleepcasts" component={SleepcastLibrary} />
      <Route path="/smart-alarm" component={SmartAlarm} />
      <Route path="/badges" component={Badges} />
      
      {/* Onboarding */}
      <Route path="/onboarding/goal" component={OnboardingGoal} />
      <Route path="/onboarding/windup" component={OnboardingWindup} />
      
      {/* Wireframe/Research Routes */}
      <Route path="/wireframes/survey" component={SurveyPage} />
      <Route path="/wireframes/interview" component={InterviewPage} />
      <Route path="/wireframes/ideate" component={SurveyPage} />
      
      {/* Testing Phase Routes */}
      <Route path="/wireframes/test/list" component={TestList} />
      <Route path="/wireframes/test/player" component={TestPlayer} />
      <Route path="/wireframes/test/mixer" component={TestMixer} />
      
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