import {
  Card,
  CardContent,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";
import "../../styles/MainHead.css";

const MainHead = () => {
  const cardHeadings = [
    "Kaiser Permanente Bronze 60 HMO",
    "Kaiser Permanente Silver 70 HMO",
    "Anthem BlueCross Bronze 60  HDHP PPO",
  ];

  return (
    <div className="main-container">
      <h1 className="insurance-title">Insurance Breakdown.</h1>
      <TextField
        variant="outlined"
        placeholder="Search for a plan to compare..."
        className="custom-search-bar"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <div className="cards-container">
        {cardHeadings.map((heading, idx) => (
          <Card
            style={{ height: "100%" , width : "100%" }}
            className={`card-${idx + 1}`}
            key={idx}
          >
            <CardContent>
              <h2 className="card-heading">{heading}</h2>
              <h2 className="card-heading_1">California</h2>

              <h2 className="card-heading_2">
                Annual
                <Tooltip
                  title="The amount you must pay for healthcare services before your insurance starts covering costs."
                  classes={{ tooltip: "white-tooltip" }}
                  arrow
                  interactive
                  placement="top"
                  enterTouchDelay={0}
                >
                  <span className="tooltip-target"> Deductible </span>
                </Tooltip>
                (individual / family)
              </h2>

              <h3 className="card-dollar-value">$8,200 / $16,400</h3>
              <div className="card-subtitle-plan">
                <div>
                  <h4 className="card-plan-title">Plan Tier</h4>
                  <p className="card-plan-text">Bronze</p>
                </div>
                <div>
                  <h4 className="card-type-title">Plan Type</h4>

                  <Tooltip
                    title="Plans that require a primary care doctor and referrals for specialists, often with lower out-of-pocket costs."
                    classes={{ tooltip: "white-tooltip" }}
                    arrow
                    interactive
                    placement="bottom"
                    enterTouchDelay={0}
                  >
                    <p className="card-type-text">
                      <span className="tooltip-target">HMO</span>
                    </p>
                  </Tooltip>
                </div>
              </div>
              <h5 className="card-other-title">HSA Eligible?</h5>
              <p className="card-other-text">No</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MainHead;
