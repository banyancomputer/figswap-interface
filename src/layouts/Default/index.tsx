import Footer from 'app/components/Footer'
import Header from 'app/components/Header'
import Main from 'app/components/Main'
import Popups from 'app/components/Popups'

// @ts-ignore TYPE NEEDS FIXING
const Layout = ({ children }) => {
  return (
    // <div className="flex flex-col w-full">
    //   <div className="flex flex-row justify-between items-center">
    //     <Header />
    //     <Main>{children}</Main>
    //   </div>
    //   <Popups />
    //   <Footer />
    //   {/* <Header />
    //   <Main>{children}</Main>
    //   <Popups />
    //   <Footer /> */}
    // </div>
    <div className="flex flex-col w-full">
      <div className="lg:flex lg:flex-row lg:justify-between lg:items-center">
        <Header />
        <Main>{children}</Main>
      </div>
      <Popups />
      <Footer />
    </div>
  )
}

export default Layout
