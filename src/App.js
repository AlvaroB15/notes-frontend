import {HomePage, UrlForm, TechnologyForm, NotFoundPage} from './pages/index';
import {Route, Routes} from 'react-router-dom';
import {TechnologyProvider} from "./context/technologyContext";

const App = () => {
    return (
        <div className="bg-neutral-900 min-h-screen flex items-center">
            <div className="px-10 container m-auto">
                <TechnologyProvider>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/new-technology" element={<TechnologyForm />} />
                        <Route path="/new-url" element={<UrlForm />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </TechnologyProvider>
            </div>
        </div>
    );
};

export default App;
