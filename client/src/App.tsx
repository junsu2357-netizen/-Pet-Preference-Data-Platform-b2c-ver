import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Router as WouterRouter, Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import TestPage from "./pages/TestPage";
import StorePage from "./pages/StorePage";
import ReportPage from "./pages/ReportPage";
import MyPage from "./pages/MyPage";
import SubscribePage from "./pages/SubscribePage";

// 네비게이션이 깃허브 주소를 기본값으로 알도록 WouterRouter로 감싸줍니다.
function AppRouter() {
  return (
    <WouterRouter base="/-Pet-Preference-Data-Platform-b2c-ver">
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
    </WouterRouter>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
