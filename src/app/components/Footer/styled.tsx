import styled from 'styled-components';

const Styled = {
  Footer: styled.footer`
    .footer {
      height: 440px;
      background-color: $neutral-800;
      // margin: 0 auto;
      padding: 75px 0;
      padding-left: 20px;
      color: white;
      .logo {
        position: relative;
        width: 82%;
        height: 100%;
        p {
          color: rgba($neutral-white, 0.9);
          // padding-right: 120px;
        }
        .description {
          margin-top: 40px;
        }
        .copyright {
          position: absolute;
          bottom: 0;
        }
      }
      h2 {
        font-size: 18px;
        color: $neutral-200;
        text-transform: uppercase;
        font-weight: 700;
      }
      .contact {
        width: 100%;
        height: 100%;
        margin-left: auto;
        &__item {
          display: flex;
          align-items: center;
        }
        p {
          margin: 0;
          padding-left: 10px;
        }
        &__address {
          display: flex;
          align-items: flex-start;
          margin-bottom: 10px;
          margin-top: 27px;
        }
        &__phone {
          margin-top: 30px;
        }
      }
      .terms {
        width: 65%;
        // text-align: end;
        margin-left: auto;
        &__title {
          margin-bottom: 20px;
          margin-left: auto;
        }
        &__item {
          margin-bottom: 30px;
        }
      }
    }
  `,
};
export default Styled;
