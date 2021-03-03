import {useState, useEffect} from 'react';

const Route = ({path, children}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    
    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.addEventListener('popstate', onLocationChange)
    }
    
  }, [])

  return path === currentPath && children;
}

export default Route;
