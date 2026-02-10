import { useEffect } from 'react';

function RecipeApp() {
  useEffect(() => {
    window.location.href = '/recipe-app.html';
  }, []);

  return null;
}

export default RecipeApp;
