import '@/assets/styles/globals.css'

export const metadata = {
    title: 'PropertyPulse | Find The Perfect Rental',
    description: 'Find your dream rental property',
    keywords: 'property, rental, home, real estate, investment, real estate investment',
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en">  
        <body>
            <div>{children}</div>
        </body>
    </html>
  )
}

export default MainLayout