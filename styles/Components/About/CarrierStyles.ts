import { Grid, styled } from "@mui/joy";
import { diphylleia } from "@/fonts/googleFonts";

const CarrierStyled = styled(Grid)`
  margin-bottom: 2rem;
  .carrier_wrapper {
    margin-left: 2%;
    font-size: 20px;
    padding: 20px;
  }

  .carrier_heading {
    font-size: 24px;
    padding: 0.4rem 0;

    span:hover {
      color: var(--white-color);
      box-shadow:
        var(--cyan-color) 0px 5px 5px 2px,
        var(--cyan-color) 0px 5px 5px -5px;
      transform: scaleX(1);
      padding: 0 1rem;
      border-radius: 1rem;
      transition: all 300ms ease-in-out;
    }

    span:not(:hover) {
      transition: all 300ms ease-in-out;
    }
  }

  .carrier_details {
    margin-left: 10%;
    .from {
      margin-left: 0.5em;
      font-size: 16px;
    }

    .experience_with {
      position: relative;
      width: 40vw;
    }

    .experience_with ul {
      position: relative;
    }

    .experience_with ul li {
      position: relative;
      left: 0;
      color: var(--lightGray-color);
      font-size: 1.4rem;
      list-style: none;
      margin: 4px 0;
      border-left: 2px solid var(--cyan-color);
      transition: 500ms;
      cursor: default;
    }

    .experience_with ul li:hover {
      left: 10px;
    }

    .experience_with ul li span {
      position: relative;
      padding: 8px;
      padding-left: 12px;
      display: inline-block;
      z-index: 1;
      transition: 500ms;
    }

    .experience_with ul li:hover span {
      color: var(--black-color);
      font-weight: 500;
    }

    .experience_with ul li:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--cyan-color);
      transform: scaleX(0);
      transform-origin: left;
      transition: 500ms;
    }
    .experience_with ul li:hover:before {
      transform: scaleX(1);
    }

    .toggle_button {
      background: none;
      border: none;
      cursor: pointer;
      font-family: ${diphylleia};
      color: var(--lightGray-color);

      > div {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .icon_image {
        padding: 0 0.5rem;
        transition: all 300ms ease-in-out;
      }

      .down_icon_image {
        padding: 0 0.5rem;
        transform: rotate(90deg);
        transition: all 300ms ease-in-out;
      }

      .toggle_title {
        font-size: 20px;
        font-weight: 600;
      }

      .toggle_title:hover {
        color: var(--white-color);
        font-size: 22px;
        transition: all 300ms ease-in-out;
      }

      .toggle_title:not(:hover) {
        transition: all 300ms ease-in-out;
      }
    }

    .toggle_content {
      max-height: 0;
      overflow: hidden;
      transition: all 300ms ease-in-out;

      h4 {
        margin-left: 2rem;
        a {
          font-size: 22px;
          text-decoration: none;
          color: var(--cyan-color);
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;

          &:visited {
            color: var(--lightGray-color);
          }

          &:hover {
            color: var(--cyan-color);
            text-decoration: underline;
          }

          &:not(:hover) {
            transition: all 300ms ease-in-out;
          }
        }
      }

      p {
        margin-left: 1rem;
      }

      ul,
      li {
        margin-left: 2rem;
        ::marker {
          color: var(--cyan-color);
        }
        ul,
        li {
          margin-left: 1rem;
          line-height: 1.8;
        }

        ul {
          margin-bottom: 1rem;
        }

        strong {
          color: var(--lightGray-color);
        }
      }
    }

    .toggle_content.expanded {
      max-height: 100%;
      margin-left: 2rem;
    }
  }

  > h2 {
    display: inline-flex;
    padding: 0 2rem 0.5rem 8rem;
    font-family: ${diphylleia};
    color: var(--lightGray-color);
  }

  > h2:hover {
    color: var(--white-color);
    transform: scale(1.1);
    transform: translateX(-20%);
    transition: all 300ms ease-in-out;
  }

  > h2:not(:hover) {
    transition: all 300ms ease-in-out;
  }
`;

export default CarrierStyled;
