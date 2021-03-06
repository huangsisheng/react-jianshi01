import { createGlobalStyle } from "styled-components"

export const IconFont = createGlobalStyle`
    @font-face {font-family: "iconfont";
        src: url('./iconfont.eot?t=1615045288695'); /* IE9 */
        src: url('./iconfont.eot?t=1615045288695#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAUwAAsAAAAACeAAAATkAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqGbIVsATYCJAMUCwwABCAFhG0HWxuLCFFUTqJkPzV5UqJkY8bMNyrTiiAwYFYFVAQJWGAqAIaAoZQ80M+V70OSvWwJWCGhPNuyE0iuU13WrKt3ejzrX4pDskYWVlcKFkq7SS5VOmnag1QcgA8j+ALSHBnYDQ4o0iTAkPPBbAq4P+5VzTwP2Hz2LY5rLcqmNQBDAY4Fxx4gLWiL3qt5iZoViUYBdgZrkf9mAmqD5IMWL+3DwCKZ0SsgnD7BUmBRSi7XEIKGqCyZmIX7Co14I34E3PO/P/xTGhYRFYkxcP3RjnnQ/DOBO7W3zm4ojOG04KaRMAGQCRdL9adpQ/8EWrXSXGc+oNYQxaEaVarlbo2YvSFhbfpJovLHE0oGvwOJn8/LB8ewERI/KxEiP2sRAj/dzAfDL6ikGl2BQAmvk/gRnyPJkmrYsLCo0bMZ0KHjkCq4W59O4xfP+lVSlftffDBicL0/ErR7onwE4fNHD/oeqr1PqT73Sj7lkTBJGXjpoei+Gi4E/DNeHPd6Ivq8D9bcK9ddfL0ID4aJAAy2IOMTviT4WMwYdT9yC6gh+JF6x0vQepJcD9+sx++4BNovI7cehyB+h0IoKrlTxmVpQpKALCPqZ0j5NL0jivCt9++MxL3rPE7sAalcgndEZcadUJNvqk3k8VsjfUry6yqOAFnCHIoa7ZEaSOkItQ17BLsmJcaSZR07MjOxjPPILfJutY681FlMDqF9uvd5Tq+qZNefINg9Uvm59Kt5oxez7lbziOgIaUgk2dd/ROohm9Nb0d3w+pLj4C10avHn0Hj285Z0tvb3y132Qc9aRvt0j3z4bPub30EfqSUfvGE6X81uf5UO+t9oxdw4iGtajVyjqvu78ZL4ZHURpG8p5HMILnAa6W2u/WSGFJ+Pjfw7buSPGYNAdVA85tVfBE7vMUE/zjNp7ZczupXrZ3Wz61fMzehWMJZ3Cha72Znw98LYX/Ql8FTdyGjKcNn7hti+kB9/4kRk4quAspHQO+/sZyAt3Gv+6fDMYU1xkWbGcL21bWwmjkhf3lIBr8uWvhpE5v6NXnR5evreqPZAeG4wvCc7/eeojSXTMyUtUX2GmD09BQiOf2nI1jlliF0VPsFUiigxmRoPv/DC/AXD55s7Y8834ziycuIeNp5rKp+125D9Zc57vmUkFhN7MOGNNxe7rZ3SxHgrraVSmrAuPgw2XUw9/4SdjHoQOG9f8Oz/i5C7X/ODe3/Jt7aaAcYH/yQBmPGXY4AlWWUZiiLL6TZdDi9cs5DPx/x3pfzRzN28N4ywJxxG0LDMSKLKwBiShhHojJ8AhaYZUGqYB7XxOqc3dSfQCrkN42wmIOjiJkSdvIakixfRGf8uFHr5FkpdghZqW0P3BZtGBa5edJGmRHoeNS5HORNvZ1KJcBA9QrMuKyUkWT6RoAUn50JLJk3JhjppOy0MMcTpZktFkUEZgbehBmI72mrlUYfAm2mTWLhEFB21RZOPlr2p0MTbAGwRAY0ios1DGS2H4pjw7Bi3ugjOff0IGsvFiiLUZFRoCTSBE1c/qkShYgDdybdDGZfS3MmNVUokYuhuDAHPBmUgtTSr6eehHOXtzGgmokJLOngdahVRlRiUXzi90HaPGT/4rMbBRYghhRyKUKouHXdRyzi7ZsGBEIays/OUmdPMybucLj74zAnKXt6CXe6yUbyRAwA=') format('woff2'),
        url('./iconfont.woff?t=1615045288695') format('woff'),
        url('./iconfont.ttf?t=1615045288695') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url('./iconfont.svg?t=1615045288695#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`