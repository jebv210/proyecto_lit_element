import { LitElement, css, html } from 'lit-element';
import { adoptar } from './adoptar.js';

export class MyElementdos extends LitElement {

  static get styles() {
    return css`
    *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    border: none;    
    outline: none;
    scroll-behavior: smooth; 
    font-family: 'Poppins', sans-serif;
    font-family: 'Roboto', sans-serif;
}

.products-list{
	display: flex;
	flex-wrap: wrap;
    
}

/* ficha  -------------------------------------------------------------- */
.products-list .product-item{
	width: 100%;
	margin-left: 3%;
	margin-bottom: 25px;
  border: var(--bg-color) solid 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	align-self: flex-start;
	transition: all .40s;
  border-radius: .70rem;
}

.products-list .product-item a{
	display: block;
	padding: 8px 0px;
	background: var(--bg-color);
	color: black;
	text-align: center;
	text-decoration: none;
  margin: 10px 10px;
  padding: auto;
  justify-content: center;
  align-items: center;
}



       .green-text {
         color: green;
       }
       .black-text {
        color: black;
      }
      .adoptar{
        background-color: #96543E;
        font-size: 17px;
        font-weight: 500;
        transition: all .50s ease;
        border-radius: .20rem;
        padding: 8px 65px;
        cursor: pointer;
      }
      .adoptar:hover{
        background-color: #593124;
        color: white;
      }
      .boton{
        background-color: red;
        font-size: 17px;
        font-weight: 500;
        transition: all .50s ease;
        border-radius: .20rem;
        padding: 8px 65px;
        cursor: pointer;
      }
      .boton:hover{
        background-color: #CD3300;
        color: white;
      }
      .product-item{
        background-color: #EEEE;
      }
      img.segundo{
          width: 150px;
          height: 150px;
        }
          
      
    `;
   }

  constructor() {
    super();
    this.estado = 'adoptar'; // Inicialmente, el estado es 'adoptar'
  }

 render() {
    return html`
    <section class="products-list">
				<div class="product-item">
					<img class="segundo" src="https://i.pinimg.com/originals/76/0e/e8/760ee8ac18a5f9d458e45a9ffae9288d.jpg" alt="" >
					<a href="#">Devorador de Mundos  
          </a>
					</a>
          <div>
          <button @click=${adoptar.bind(this)} class="adoptar">adoptar</button></a></div>
				</div>

		</section>			
    `;
 }

}

customElements.define('my-elementdos', MyElementdos);