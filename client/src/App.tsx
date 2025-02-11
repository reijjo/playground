import { Route, Routes } from "react-router"
import { Landing } from "./pages/landing-page/Landing"
import { Layout } from "./components/Layout"

function App() {

  return (
    <Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Landing />} />
			</Route>
    </Routes>
  )
}

export default App
