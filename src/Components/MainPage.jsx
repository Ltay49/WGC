import "../App.css";

function MainPage() {
  return (
    <section className="MainPage">
      <div className="main-content">
        <h1>Welcome to <span className="highlight">Wernerth Golf Club</span></h1>
        <p>
          Founded in <strong>1909</strong>, the golf course and clubhouse are located on the south side of 
          <strong> Oldham, Greater Manchester</strong>, in a conservation area known as the <em>Garden Suburb</em>.
        </p>
        <p>
          This once <em>semi-moorland</em> course has been modified over the last <strong>100 years</strong> and now 
          boasts several <strong>tree-lined fairways</strong> and many added <strong>bunkers</strong>.
        </p>
        <p>
          The course is set in <strong>62 acres</strong> of land, which probably makes it one of the 
          <em>smallest 18-hole courses</em> in the North West. However, <strong>don't be fooled by the size</strong> —
          with its <strong>small greens</strong> and <strong>narrow fairways</strong>, it is still a 
          <span className="highlight">testing course</span> for all levels of golfers.
        </p>
        <p>
          After a <em>not-too-exhausting round</em>, you can retire to the clubhouse where 
          <strong>warm Lancashire hospitality</strong> awaits. Renowned for its 
          <em>friendliness and relaxed atmosphere</em>, you can enjoy a <strong>bar snack or meal</strong> together 
          with a drink from a <strong>well-stocked bar</strong>.
        </p>
        <p>
          For the <strong>beginner</strong> or golfer wanting to <strong>improve their skills</strong>, lessons are 
          available from our <strong>in-house Professional</strong>, who also provides a 
          <strong>well-stocked golf shop</strong>. <span className="highlight">New members and visitors are always welcome</span>, 
          and we look forward to you enjoying our course and facilities.
        </p>
      </div>
    </section>
  );
}

export default MainPage;

