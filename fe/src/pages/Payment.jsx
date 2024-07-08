import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import "../pages/Payment.scss";

function Payment() {

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Ödeme işlemleri burada gerçekleştirilir, şu anda sadece SweetAlert mesajı gösterilecek.
    Swal.fire({
      icon: 'success',
      title: 'Ödeme uğurla tamamlandı!',
      text: 'Teşekkür ederiz.',
      confirmButtonText: 'Anladım',
    });
  };

  return (
    <>
      <div className="payment_container">
        <h1>Ödeme Bilgileri</h1>
        <form onSubmit={handleSubmit}>
          <div className="input_container">
            <label htmlFor="username">İstifadəçi adı</label>
            <input type="text" id="username" name="username" required />

            <label htmlFor="surname">Soyadı</label>
            <input type="text" id="surname" name="surname" required />

            <label htmlFor="phone">Telefon nömrəsi</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required />

            <label htmlFor="cardNumber">Kart nömrəsi</label>
            <input type="text" id="cardNumber" name="cardNumber" required />

            <label htmlFor="expiry">Bitiş tarixi (MM/YY)</label>
            <input id="expiry" name="expiry" type="text" required />

            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" pattern="[0-9]{3,4}" required />
          </div>

          <div className="submit_div">
            <button type="submit" className="submit_btn">Ödemeyi Tamamla</button>
          </div>
        </form>

        <div className="back_btn">
          <Link to="/">Geri Dön</Link>
        </div>
      </div>
    </>
  );
}

export default Payment;
