

export default function ContactForm(props) {
  return(
    <div class="contactForm">
      <form class="row g-3" action="https://formsubmit.co/d3172cbee0111dc49f047658007b5453" method="POST">
        <div class="col-md-4 col-sm-12">
          <label for="" class="form-label">Name</label>
          <input type="text" class="form-control" id="nameInfo" name="Name" required/>
        </div>
        <div class="col-md-8 col-sm-12">
          <label for="" class="form-label">Email</label>
          <input type="email" class="form-control" id="emailInfo"  name="Email" required/>
        </div>
          <div class="col-md-12">
            <label for="" class="form-label">Subject</label>
            <input type="text" class="form-control" id="subjectInfo" name="Subject" required/>
        </div>
        <div class="col-lg-12 col-sm-12">
          <label for="" class="form-label">Message</label>
          <textarea class="form-control" id="comments" rows="3"  name="Message" required/>
        </div>
        <div class="col-md-12">
          <button type="submit" class="btn btn-primary">SUBMIT</button>
        </div>
        
      </form>
    </div>
  )
} 