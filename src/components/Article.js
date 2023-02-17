

function Article() {
    return (
      <div>
        <article>
          <time datetime="11/12/20" class="date1">11/12/20</time>
          <h2>On The Street in Brooklyn</h2>
          <img src='images/image-1.jpg' alt="Brooklyn Street" />
          <p><span className="first-letter">C</span>ray ipsum, dolor sit amet consectetur adipisicing elit. Quidem dolore repellendus ratione autem ut voluptatibus, sint ab est. Rem blanditiis obcaecati dolorem dolor porro corrupti possimus illo, placeat odit aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem tempore commodi omnis sunt odio, quam ipsum nam mollitia, accusantium voluptates in, laborum possimus nisi aliquid ea provident nostrum maxime.</p>
          <a href="#" className="continues">Continues ...</a>
        </article>
        <hr />
        <article>
          <time datetime="11/11/20" class="date2">11/11/20</time>
          <h2>Vintage in Vogue</h2>
          <img src="images/image-2.jpg" alt="pic2" />
          <p><span className="first-letter">S</span>elfies sunt, ipsum dolor sit amet consectetur adipisicing elit. Quae ad quisquam rem laudantium, ex quod consequatur reprehenderit quas voluptatum deleniti officiis similique aperiam vitae esse velit repellat enim culpa itaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ut beatae voluptatibus nobis porro quia fuga debitis? Inventore, quaerat. Nihil neque dicta fugiat alias veniam, corrupti doloremque ea facere vero.</p>
          <a href="#" className="continues">Continues ...</a>
        </article>
      </div>
    );
  }
  
  export default Article;