import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import ChatbotOptimization from "../pages/case-studies/chatbot-optimization/page";
import ContentGeneration from "../pages/case-studies/content-generation/page";
import CodeAssistant from "../pages/case-studies/code-assistant/page";
import MedicalAssistant from "../pages/case-studies/medical-assistant/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/case-studies/chatbot-optimization",
    element: <ChatbotOptimization />,
  },
  {
    path: "/case-studies/content-generation",
    element: <ContentGeneration />,
  },
  {
    path: "/case-studies/code-assistant",
    element: <CodeAssistant />,
  },
  {
    path: "/case-studies/medical-assistant",
    element: <MedicalAssistant />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
