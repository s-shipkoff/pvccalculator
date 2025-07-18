export const stateTaxData = {
  "Alabama": [
    { min: 0, max: 500, rate: 0.02 },
    { min: 500, max: 3000, rate: 0.04 },
    { min: 3000, max: Infinity, rate: 0.05 }
  ],
  "Alaska": { rate: 0 },
  "Arizona": { rate: 0.025 },
  "Arkansas": {
    tiers: [
      {
        threshold: 92300,
        brackets: [
          { min: 0, max: 5500, rate: 0 },
          { min: 5500, max: 10900, rate: 0.02 },
          { min: 10900, max: 15600, rate: 0.03 },
          { min: 15600, max: 25700, rate: 0.034 },
          { min: 25700, max: Infinity, rate: 0.039 }
        ]
      },
      {
        threshold: Infinity,  // Threshold for over 92,300
        brackets: [
          { min: 0, max: 4601, rate: 0.02 },
          { min: 4601, max: Infinity, rate: 0.039 }
        ]
      }
    ]
  },
  "California": [
    { min: 0, max: 10756, base: 0, rate: 0.01 },
    { min: 10756, max: 25499, base: 107.56, rate: 0.02 },
    { min: 25499, max: 40245, base: 402.42, rate: 0.04 },
    { min: 40245, max: 55866, base: 992.26, rate: 0.06 },
    { min: 55866, max: 70606, base: 1929.52, rate: 0.08 },
    { min: 70606, max: 360659, base: 3108.72, rate: 0.093 },
    { min: 360659, max: 432787, base: 30083.65, rate: 0.103 },
    { min: 432787, max: 721314, base: 37512.83, rate: 0.113 },
    { min: 721314, max: Infinity, base: 70116.38, rate: 0.123 }
  ],
  "Colorado": { rate: 0.0441 },
  "Connecticut": { rate: 0.0699 },
  "Delaware": [
    { min: 0, max: 2000, rate: 0 },
    { min: 2000, max: 5000, rate: 0.022 },
    { min: 5000, max: 10000, rate: 0.039 },
    { min: 10000, max: 20000, rate: 0.048 },
    { min: 20000, max: 25000, rate: 0.052 },
    { min: 25000, max: 60000, rate: 0.0555 },
    { min: 60000, max: Infinity, rate: 0.066 }
  ],
  "Florida": { rate: 0 },
  "Georgia": { rate: 0.0529 },
  "Hawaii": [
    { min: 0, max: 2000, base: 0, rate: 0.014 },
    { min: 2000, max: 4000, base: 28.00, rate: 0.032 },
    { min: 4000, max: 8000, base: 92.00, rate: 0.055 },
    { min: 8000, max: 12000, base: 312.00, rate: 0.064 },
    { min: 12000, max: 16000, base: 568.00, rate: 0.068 },
    { min: 16000, max: 20000, base: 840.00, rate: 0.072 },
    { min: 20000, max: 30000, base: 1128.00, rate: 0.076 },
    { min: 30000, max: 40000, base: 1888.00, rate: 0.079 },
    { min: 40000, max: Infinity, base: 2678.00, rate: 0.0825 }
  ],
  "Idaho": [
    { min: 0, max: 2500, rate: 0 },
    { min: 2500, max: Infinity, rate: 0.058 }
  ],
  "Illinois": { rate: 0.0645 },
  "Indiana": { rate: 0.0305 },
  "Iowa": [
    { min: 0, max: 6210, base: 0, rate: 0.044 },
    { min: 6210, max: 31050, base: 273.24, rate: 0.0482 },
    { min: 31050, max: Infinity, base: 1470.53, rate: 0.057 }
  ],
  "Kansas": [
    { min: 0, max: 23000, base: 0, rate: 0.052 },
    { min: 23000, max: Infinity, base: 1196.00, rate: 0.0558 }
  ],
  "Kentucky": { rate: 0.04 },
  "Louisiana": { rate: 0.03 },
  "Maine": [
    { min: 0, max: 26800, base: 0, rate: 0.058 },
    { min: 26800, max: 63450, base: 1554.00, rate: 0.0675 },
    { min: 63450, max: Infinity, base: 4028.00, rate: 0.0715 }
  ],
  "Maryland": [
    { min: 0, max: 1000, base: 0, rate: 0.02 },
    { min: 1000, max: 2000, base: 20.00, rate: 0.03 },
    { min: 2000, max: 3000, base: 50.00, rate: 0.04 },
    { min: 3000, max: 100000, base: 90.00, rate: 0.0475 },
    { min: 100000, max: 125000, base: 4697.50, rate: 0.05 },
    { min: 125000, max: 150000, base: 5947.50, rate: 0.0525 },
    { min: 150000, max: 250000, base: 7260.00, rate: 0.055 },
    { min: 250000, max: Infinity, base: 12760.00, rate: 0.0575 }
  ],
  "Massachusetts": { rate: 0.05 },
  "Michigan": { rate: 0.0425 },
  "Minnesota": [
    { min: 0, max: 32571, rate: 0.0535 },
    { min: 32571, max: 106991, rate: 0.065 },
    { min: 106991, max: 198631, rate: 0.0785 },
    { min: 198631, max: Infinity, rate: 0.0985 }
  ],
  "Mississippi": [
    { min: 0, max: 10000, rate: 0 },
    { min: 10000, max: Infinity, rate: 0.0447 }
  ],
  "Missouri": [
    { min: 0, max: 1273, base: 0, rate: 0 },
    { min: 1273, max: 2546, base: 0, rate: 0.02 },
    { min: 2546, max: 3819, base: 25.00, rate: 0.025 },
    { min: 3819, max: 5092, base: 57.00, rate: 0.03 },
    { min: 5092, max: 6365, base: 95.00, rate: 0.035 },
    { min: 6365, max: 7638, base: 140.00, rate: 0.05 },
    { min: 7638, max: 8911, base: 191.00, rate: 0.045 },
    { min: 8911, max: Infinity, base: 248.00, rate: 0.047 }
  ],
  "Montana": [
  { min: 0, max: 21100, rate: 0.047 },
  { min: 21100, max: Infinity, rate: 0.059 }
],
  "Nebraska": [
    { min: 0, max: 640, base: 0, rate: 0.0246 },
    { min: 640, max: 6100, base: 15.74, rate: 0.0351 },
    { min: 6100, max: 19670, base: 207.39, rate: 0.0501 },
    { min: 19670, max: Infinity, base: 887.25, rate: 0.0584 }
  ],
  "Nevada": { rate: 0 },
  "New Hampshire": { rate: 0 },
  "New Jersey": [
    { min: 0, max: 20000, base: 0, rate: 0.014 },
    { min: 20000, max: 35000, base: 280.00, rate: 0.0175 },
    { min: 35000, max: 40000, base: 542.50, rate: 0.035 },
    { min: 40000, max: 75000, base: 717.50, rate: 0.05525 },
    { min: 75000, max: 500000, base: 2651.25, rate: 0.0637 },
    { min: 500000, max: 1000000, base: 29723.75, rate: 0.0897 },
    { min: 1000000, max: Infinity, base: 74573.75, rate: 0.1075 }
  ],
  "New Mexico": [
    { min: 0, max: 5500, base: 0, rate: 0.015 },
    { min: 5500, max: 16500, base: 82.50, rate: 0.032 },
    { min: 16500, max: 33500, base: 434.50, rate: 0.043 },
    { min: 33500, max: 66500, base: 1165.50, rate: 0.047 },
    { min: 66500, max: 210000, base: 2716.50, rate: 0.049 },
    { min: 210000, max: Infinity, base: 9748.00, rate: 0.059 }
  ],
  "New York": [
    { min: 0, max: 8500, base: 0, rate: 4 },
    { min: 8500, max: 11700, base: 340.00, rate: 0.045 },
    { min: 11700, max: 13900, base: 484.00, rate: 0.0525 },
    { min: 13900, max: 80650, base: 600.00, rate: 0.055 },
    { min: 80650, max: 215400, base: 4271.00, rate: 0.06 },
    { min: 215400, max: 1077550, base: 12356.00, rate: 0.0685 },
    { min: 1077550, max: 5000000, base: 71413.00, rate: 0.0965 },
    { min: 5000000, max: 25000000, base: 449929.00, rate: 0.103 },
    { min: 25000000, max: Infinity, base: 2509929.00, rate: 0.109 }
  ],
  "North Carolina": { rate: 0.045 },
  "North Dakota": [
    { min: 0, max: 47150, base: 0, rate: 0.0246 },
    { min: 47150, max: 238200, base: 0, rate: 0.0195 },
    { min: 238200, max: Infinity, base: 3725.48, rate: 0.025 }
  ],
  "Ohio": [
    { min: 0, max: 26050, base: 0, rate: 0 },
    { min: 26050, max: 100000, base: 360.69, rate: 0.0275 },
    { min: 100000, max: Infinity, base: 2394.32, rate: 0.035 }
  ],
  "Oklahoma": [
    { min: 0, max: 1000, base: 0, rate: 0.0025 },
    { min: 1000, max: 2500, base: 15.74, rate: 0.0075},
    { min: 2500, max: 3750, base: 207.39, rate: 0.0175},
    { min: 3750, max: 4900, base: 15.74, rate: 0.0275 },
    { min: 4900, max: 7200, base: 207.39, rate: 0.0375 },
    { min: 7200, max: Infinity, base: 887.25, rate: 0.0475 }
  ],
  "Oregon": [
    { min: 0, max: 4300, base: 0, rate: 0.0475 },
    { min: 4300, max: 10750, base: 204.00, rate: 0.0675 },
    { min: 10750, max: 125000, base: 639.00, rate: 0.0875 },
    { min: 125000, max: Infinity, base: 10636.00, rate: 0.099 }
  ],
  "Pennsylvania": { rate: 0.0307 },
  "Rhode Island": [
    { min: 0, max: 3100, base: 0, rate: 0.0375 },
    { min: 3100, max: 98500, base: 116.25, rate: 0.0475 },
    { min: 9850, max: Infinity, base: 436.88, rate: 0.0599 }
  ],
  "South Carolina": [
    { min: 0, max: 3460, lose: 0, rate: 0 },
    { min: 3460, max: 17330, lose: 104.00, rate: 0.03 },
    { min: 17330, max: Infinity, lose: 659.00, rate: 0.062 }
  ],
  "South Dakota": { rate: 0 },
  "Tennessee": { rate: 0 },
  "Texas": { rate: 0 },
  "Utah": { rate: 0.0455 },
  "Vermont": [
    { min: 0, max: 3200, base: 0, rate: 0.0335 },
    { min: 3200, max: 7550, base: 107.00, rate: 0.066 },
    { min: 7550, max: 11550, base: 394.00, rate: 0.076 },
    { min: 11550, max: Infinity, base: 698.00, rate: 0.0875 }
  ],
  "Virginia": [
    { min: 0, max: 3000, base: 0, rate: 0.02 },
    { min: 3200, max: 5000, base: 60.00, rate: 0.03 },
    { min: 5000, max: 17000, base: 120.00, rate: 0.05 },
    { min: 17000, max: Infinity, base: 720.00, rate: 0.0575 }
  ],
  "Washington": { rate: 0 },
  "Washington D.C.": [
    { min: 0, max: 10000, base: 0, rate: 0.04 },
    { min: 10000, max: 40000, base: 400.00, rate: 0.06 },
    { min: 40000, max: 60000, base: 2200.00, rate: 0.065 },
    { min: 60000, max: 250000, base: 3500.00, rate: 0.085 },
    { min: 250000, max: 500000, base: 19650.00, rate: 0.0925 },
    { min: 500000, max: 1000000, base: 42775.00, rate: 0.0975 },
    { min: 1000000, max: Infinity, base: 91525, rate: 0.1075 }
  ],
  "West Virginia": [
    { min: 0, max: 10000, base: 0, rate: 0.0236 },
    { min: 10000, max: 25000, base: 236.00, rate: 0.0315 },
    { min: 25000, max: 40000, base: 708.50, rate: 0.0354 },
    { min: 40000, max: 60000, base: 1239.50, rate: 0.0472 },
    { min: 60000, max: Infinity, base: 2813.00, rate: 0.0512 }
  ],
  "Wisconsin":  [
    { min: 0, max: 14320, base: 0, rate: 0.035 },
    { min: 14320, max: 28640, base: 501.20, rate: 0.044 },
    { min: 28640, max: 315310, base: 1131.28, rate: 0.053 },
    { min: 315310, max: Infinity, base: 16324.79, rate: 0.0765 }
  ],
  "Wyoming": { rate: 0 }
}