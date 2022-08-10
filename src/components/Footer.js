import React from 'react'
import '../css/footer.css'
import '../responsive/footer_media.css'

const Footer = () => {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <div className='backdrop_footer'>
        <div className='footer_box'>

          <div className='footer_box_left'>
            <h1>Web Wale</h1>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatem, sunt, nesciunt quas hic magni aspernatur nulla voluptas tempora quia explicabo culpa quibusdam molestiae quam sapiente distinctio ducimus non sequi.  explicabo culpa quibusdam molestiae quam sapiente distinctio ducimus non sequi.explicabo culpa quibusdam molestiae quam sapiente distinctio ducimus non sequi.</p>
          </div>
          <div className='footer_box_middle'></div>
           <div className='footer_box_right'>
            <h1>Company Detaisl</h1>
            <h4>Founder : Aman shaw</h4>
            <h4>Co Founder : Nitesh Shaw</h4>
            <h4>Social Links</h4>
            <div className='social_links'>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-square-instagram"></i>
              <i class="fa-brands fa-youtube"></i>

            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
