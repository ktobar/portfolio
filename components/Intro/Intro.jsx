// import Image from 'react-bootstrap/Image'

export default function Intro({ name, avatar, role, summary }) {
  
  return (
    <div class="container intro mt-4">
      <div class="row">
        <div class="col-md-3 col-sm-12">
          <img src={avatar} className="img-fluid rounded-circle" />
        </div>
        <div class="col-md-9 col-sm-12">
          <h1 className='display-1'>{name}</h1>

          <h2>{role}</h2>
          <h3>{summary}</h3>
        </div>
      </div>
    </div>
  );
}
