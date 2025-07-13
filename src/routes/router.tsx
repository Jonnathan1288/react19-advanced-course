import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ApiPage } from "../pages/api-page";
import { HomePage } from "../pages/home-page";
import { ImagePage } from "../pages/image-page";
import { LoginPage } from "../pages/login-page";
import { NestedRoutePage } from "../pages/nested-route-page";
import { NotFoundPage } from "../pages/not-found-page";
import { ProfilePage } from "../pages/profile-page";
import { SettingPage } from "../pages/setting-page";
import { UseEffectPage } from "../pages/use-effect-page";
import ZustandPage from "../pages/zustand-page";
import { TodoSupabasePage } from "../pages/todo-supabase-page";
import { FormPage } from "../pages/form-page";

// export const PageRouter = () => (
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<LayoutMain />}>
//                 <Route index element={<HomePage />} />
//                 <Route path="login" element={<LoginPage />} />
//                 <Route path="use-effect" element={<UseEffectPage />} />
//                 <Route path="image" element={<ImagePage />} />
//                 <Route path="nested-route" element={<NestedRoutePage />}>
//                     <Route index element={<Navigate to="profile/10" replace />} />
//                     <Route path="profile/:id" element={<ProfilePage />} />
//                     <Route path="setting" element={<SettingPage />} />
//                 </Route>
//             </Route>
//             <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//     </BrowserRouter>
// );

// Before layout
export const PageRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/use-effect" element={<UseEffectPage />} />
            <Route path="/image" element={<ImagePage />} />
            <Route path="/api" element={<ApiPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/zustand" element={<ZustandPage />} />
            <Route path="/todo-supabase" element={<TodoSupabasePage />} />
            <Route path="/nested-route" element={<NestedRoutePage />}>
                <Route index element={<Navigate to="profile/10" replace />} />
                <Route path="profile/:id" element={<ProfilePage />} />
                <Route path="setting" element={<SettingPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
);
