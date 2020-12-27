import Button from "react-bootstrap/Button";
import Pulse from "react-reveal/Pulse";

export default function ActionButtons() {
  return (
    <div>
      <Pulse>
        <Button variant="primary" block className="mt-2">
          Play Podcast
        </Button>
      </Pulse>
      <Pulse>
        <Button variant="info" block className="mt-2">
          Contattaci
        </Button>
      </Pulse>
    </div>
  );
}
