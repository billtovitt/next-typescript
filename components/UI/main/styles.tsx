import css from 'styled-jsx/css';

export default css`
  .container {
    display: flex;
    justify-content: center;
    width: fit-content;
    flex-direction: column;
  }

  .card-layout {
    display: flex;
    max-width: 770px;
    flex-wrap: wrap;
  }

  .pagination {
    height: 30px;
    text-align: center;
  }

  .pagination .prev,
  .pagination .next {
    width: 30px;
    height: 30px;
    margin: 0 3px;
  }

  .pagination input {
    width: 50px;
    height: 30px;
    text-align: center;
  }
`;
