import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import TestPage from "./pages/TestPage";
import StorePage from "./pages/StorePage";
import ReportPage from "./pages/ReportPage";
import MyPage from "./pages/MyPage";
import SubscribePage from "./pages/SubscribePage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/test" component={TestPage} />
      <Route path="/store" component={StorePage} />
      <Route path="/report" component={ReportPage} />
      <Route path="/mypage" component={MyPage} />
      <Route path="/subscribe" component={SubscribePage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
