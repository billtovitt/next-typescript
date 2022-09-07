import css from 'styled-jsx/css';

export default css`
  .card-container {
    position: relative;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    margin: 13px 15px;
    display: flex;
    flex-direction: row;
  }

  .card-container .img-container {
    border-radius: 5px;
    width: 50px;
    height: 50px;
    background-size: 100% 100%;
    margin-right: 10px;
  }

  .card-container .description {
    position: absolute;
    bottom: 10px;
    left: 10px;
  }

  .card-container p {
    color: #000;
    font-size: 16px;
    margin: 0 2px 0 0;
  }

  .card-container p.title {
    font-size: 16px;
    color: #000;
  }

  .card-container p.note {
    font-size: 14px;
    color: #757575;
  }

  .card-container .arrow {
    position: absolute;
    right: 20px;
    top: 50%;
    width: 8px;
    height: 12px;
    background-image: url(/arrow.svg);
    transform: translateY(-50%);
  }

`;
