import * as React from 'react';

function ActiveLeft(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={50} height={50} fill="none" {...props}>
      <path
        d="M30.625 3.945c-1.16 0-2.273.416-3.094 1.156-.82.74-1.281 1.743-1.281 2.79v9c0 1.071-.97 1.933-2.188 2.415V5.918c0-1.57-.69-3.075-1.922-4.185C20.91.623 19.24 0 17.5 0c-1.74 0-3.41.624-4.64 1.733-1.231 1.11-1.922 2.615-1.922 4.185v17.388c-1.228-.468-2.188-1.352-2.188-2.47v-5.055c0-1.046-.46-2.05-1.281-2.79-.82-.74-1.934-1.155-3.094-1.155s-2.273.416-3.094 1.156C.461 13.732 0 14.735 0 15.782v6.904c0 2.179 1.914 3.822 3.691 4.746 1.361.708 5.175 1.578 7.247 1.629v3.488c0 3.268 13.124 3.268 13.124 0v-7.446c2.167-.117 5.787-.94 7.087-1.616C32.926 22.563 35 20.919 35 18.74V7.89c0-1.046-.46-2.05-1.281-2.79-.82-.739-1.934-1.155-3.094-1.155z"
        fill="#77B255"
      />
      <path
        d="M11.323 5.345c.569 0 1.03-.479 1.03-1.07 0-.59-.461-1.068-1.03-1.068-.568 0-1.029.479-1.029 1.069s.461 1.069 1.03 1.069zM22.647 2.138c.569 0 1.03-.479 1.03-1.069S23.216 0 22.646 0s-1.03.479-1.03 1.069.461 1.069 1.03 1.069zM20.588 8.552c.569 0 1.03-.479 1.03-1.07 0-.59-.461-1.068-1.03-1.068-.568 0-1.03.478-1.03 1.069 0 .59.462 1.069 1.03 1.069zM13.382 16.035c.569 0 1.03-.48 1.03-1.07 0-.59-.461-1.068-1.03-1.068-.568 0-1.029.478-1.029 1.069 0 .59.46 1.069 1.03 1.069zM19.559 20.31c.568 0 1.03-.478 1.03-1.069 0-.59-.462-1.069-1.03-1.069-.569 0-1.03.479-1.03 1.07 0 .59.461 1.068 1.03 1.068zM12.353 26.724c.568 0 1.03-.478 1.03-1.069 0-.59-.462-1.069-1.03-1.069-.569 0-1.03.479-1.03 1.07 0 .59.461 1.068 1.03 1.068zM4.118 27.793c.568 0 1.029-.478 1.029-1.069 0-.59-.46-1.069-1.03-1.069-.568 0-1.029.479-1.029 1.07 0 .59.461 1.068 1.03 1.068zM8.235 20.31c.569 0 1.03-.478 1.03-1.069 0-.59-.461-1.069-1.03-1.069-.568 0-1.03.479-1.03 1.07 0 .59.462 1.068 1.03 1.068zM1.03 18.172c.568 0 1.029-.478 1.029-1.069 0-.59-.461-1.069-1.03-1.069-.568 0-1.029.48-1.029 1.07 0 .59.46 1.068 1.03 1.068zM33.97 7.483c.569 0 1.03-.479 1.03-1.07 0-.59-.461-1.068-1.03-1.068-.568 0-1.029.478-1.029 1.069 0 .59.461 1.069 1.03 1.069zM27.794 10.69c.569 0 1.03-.479 1.03-1.07 0-.59-.461-1.068-1.03-1.068s-1.03.478-1.03 1.069c0 .59.462 1.069 1.03 1.069zM31.912 16.035c.568 0 1.03-.48 1.03-1.07 0-.59-.462-1.068-1.03-1.068-.569 0-1.03.478-1.03 1.069 0 .59.461 1.069 1.03 1.069zM28.823 24.586c.569 0 1.03-.478 1.03-1.069 0-.59-.461-1.069-1.03-1.069-.568 0-1.029.479-1.029 1.07 0 .59.461 1.068 1.03 1.068zM21.617 31c.57 0 1.03-.479 1.03-1.069s-.46-1.069-1.03-1.069c-.568 0-1.029.479-1.029 1.069S21.05 31 21.618 31z"
        fill="#3E721D"
      />
    </svg>
  );
}

const MemoActiveLeft = React.memo(ActiveLeft);
export default MemoActiveLeft;