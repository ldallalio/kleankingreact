import React, {useEffect} from 'react';

function PageTitle({ pageName }) {
  const name = pageName;
  
  useEffect(()=>{  
const stylesArr = document.querySelector('.pageTitle').classList;
  if (stylesArr.length > 1) {
    
    document.querySelector('.pageTitle').classList.remove(stylesArr[1])
  }
    document.querySelector('.pageTitle').classList.add(name);
  }, [name])

  
  return (
    <div className="pageTitle tile">
      {/* <h1>{name}</h1> */}
    </div>
  );
}

export default PageTitle;
