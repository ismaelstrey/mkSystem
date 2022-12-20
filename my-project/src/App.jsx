import Content from './components/content'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Main from './components/main'
import { DataView } from './components/dataview'
import { FormLogin } from './components/form'
import { GetAllData } from './api/moch'
import { useEffect, useState } from 'react'
function App() {
  const [dec, setDec] = useState([])
  useEffect(() => {
    GetAllData().then(res => setDec(res))
  }, [])
  return (
    <div className="flex-auto h-screen w-screen font-light text-white bg-purple-200">
      <Header />
      <Main>
        <Sidebar />
        <Content>
          <FormLogin />
          <DataView data={dec} />
        </Content>
      </Main>
    </div>
  )
}
export default App
