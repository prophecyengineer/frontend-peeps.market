import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import React from "react"

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Nav />
      <main style={{
                paddingTop: "60px"
              }} className="relative">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
