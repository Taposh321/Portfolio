import React from 'react';
import { Oval } from 'react-loader-spinner';
const styles = {
    loaderContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
  };
  
  
function Loading(){
  return (
    <div style={styles.loaderContainer}>
      <Oval
        height={50}
        width={50}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loading;
