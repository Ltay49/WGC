function Fixtures() {
    return (
      <div style={styles.container}>
        <h2 style={styles.heading}>🏌️ Upcoming Fixtures</h2>
        <div style={styles.iframeWrapper}>
          <iframe
            style={styles.iframe}
            src="https://calendar.google.com/calendar/embed?showTitle=0&showPrint=0&showCalendars=0&showTz=0&mode=AGENDA&wkst=2&bgcolor=%233366ff&src=wernthgccalendar%40gmail.com&color=%2329527A&ctz=Europe%2FLondon"
            frameBorder="0"
            scrolling="no"
            title="Werneth Golf Club Fixtures"
          ></iframe>
        </div>
      </div>
    );
  }
  
  const styles = {
    container: {
      padding: '2rem',
      backgroundColor: '#f4f4f4',
      borderRadius: '12px',
      maxWidth: '100%',
    //   margin: '2rem auto',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    },
    heading: {
      textAlign: 'left',
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '1.8rem',
      marginBottom: '1rem',
      color: '#2d572c',
    },
    iframeWrapper: {
      overflow: 'hidden',
      borderRadius: '8px',
      border: '1px solid #ccc',
    },
    iframe: {
      width: '100%',
      height: '500px',
      border: '0',
    },
  };
  
  export default Fixtures;
  
  
