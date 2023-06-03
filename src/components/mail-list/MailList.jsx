import "./mailList.scss";

export default function MailList() {
  return (
    <div className='mail-container'>
    <h1>Save time, save money!</h1>
    <span>Sign up and we'll send the best deals to you</span>
    <div className='input-container'>
        <input placeholder='Your Email Address'></input>
        <button>Subscribe</button>
    </div>
      
    </div>
  )
}
