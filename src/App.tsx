import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import { PageRouter } from "./routes/router";
const queryClient = new QueryClient();

// https://tanstack.com/query/latest/docs/framework/react/devtools
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <PageRouter />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

// Just only page
// To rename import
export default App;
