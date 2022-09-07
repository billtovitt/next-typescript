import css from 'styled-jsx/css';

export default css`
  @keyframes fadein {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  .card-container {
    position: relative;
    width: 200px;
    height: 280px;
    border-radius: 10px;
    background-color: #777;
    margin: 20px 28px;
  }

  .card-container.n-0 {
    animation: fadein 1s;
  }

  .card-container.n-1 {
    animation: fadein 1.5s;
  }

  .card-container.n-2 {
    animation: fadein 2s;
  }

  .card-container.n-3 {
    animation: fadein 2.5s;
  }

  .card-container.n-4 {
    animation: fadein 3s;
  }

  .card-container.n-5 {
    animation: fadein 3.5s;
  }

  .card-container.n-6 {
    animation: fadein 4s;
  }

  .card-container.n-7 {
    animation: fadein 4.5s;
  }

  .card-container.n-8 {
    animation: fadein 5s;
  }

  .card-container .img-container {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
  }

  .card-container .name-container {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: white;
  }

  .card-container .back-gradient {
    position: absolute;
    width: 100%;
    height: 100px;
    bottom: 0px;
    background: linear-gradient(180deg, #D9D9D9 0%, rgba(0, 0, 0, 0) 0.01%, rgba(0, 0, 0, 0.69) 100%);
    border-radius: 0px 0px 10px 10px;
  }
  
  .card-container .name-container p {
    font-weight: 600;
    margin: 0;
  }

  @media (max-width: 600px) {
    .card-container {
      position: relative;
      width: 100%;
      height: 280px;
      border-radius: 10px;
      background-color: #777;
      margin: 20px 28px;
    }
  }
`;
