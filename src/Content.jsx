import Home from "./pages/Home"
import Vector from "./pages/Vector"

export default function Content ({category, page}) {

  const content = () => {
    switch (category) {
        case 'vector': return <Vector />;
      default: return <Home />
    }
  }

    return (
        <>
        { content() }
        </>
    )
}