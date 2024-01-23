import React from "react";
import { Container } from "semantic-ui-react";
import { TopBar } from "../../components/Web/TopBar/TopBar";

import "./ClientLayout.scss";

export function ClientLayout(props) {
  const { children } = props;
  return (
    <div className="client-layout">
      <div className="client-layout__header">
        <TopBar />
      </div>
      {children}

      <div className="client-layout__footer">
        <Container>
          <span>INFO</span>
          <span>MENU</span>
          <span>NEWSLETTER</span>
        </Container>
        <Container>
          <span>DERECHOS RESERVADOS</span>
          <span>SERGIO PAEZ || FRONTEND DEVELOPER</span>
        </Container>
      </div>
    </div>
  );
}
