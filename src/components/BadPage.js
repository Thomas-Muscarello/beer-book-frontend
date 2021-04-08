import React from 'react'
import { useLocation, Link } from "react-router-dom";

function BadPage() {
    let location = useLocation();
        return (
          <div>
            <h3>
              No match for <code>{location.pathname}</code>
            </h3>
            <Link to='/'> Return to Beer-Book</Link>
          </div>
        );
    }

export default BadPage