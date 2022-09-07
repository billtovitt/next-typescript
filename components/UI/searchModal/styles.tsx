import css from 'styled-jsx/css';

export default css`
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .container {
    position: absolute;
    display: flex;
    justify-content: center;
    width: fit-content;
    flex-direction: column;
    z-index: 10;
    width: 620px;
    left: 50%;
    top: 25%;
    transform: translateX(-50%);
  }

  .close-icon {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: right;
    padding-right: 10px;
  }

  .close-icon a:hover {
    cursor: pointer;
  }

  .search-box {
    position: relative;
    height: 64px;
    border-radius: 32px;
    font-size: 16px;
    color: #000;
    margin-bottom: 19px;
    padding: 0 0 0 40px;
    width: 100%;
    border: 0;
  }

  .search-result {
    width: 100%;
    background-color: #fff;
    border-radius: 32px;
    padding: 32px;
  }

  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }

    .container {
      width: 100%;
      padding: 0 10px;
    }
  }
  
`;
