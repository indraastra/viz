var s2Faces = [
  {center: [0, 0]},
  {center: [90, 0]},
  {center: [0, 90]},
  {center: [180, 0]},
  {center: [-90, 0]},
  {center: [0, -90]},
];

var s2Cells = {
  face4_level0: {"type": "Feature", "geometry": {"type": "Polygon", "coordinates": [[[-45.0, 35.264389682754654], [-45.0, -35.264389682754654], [-135.0, -35.264389682754654], [-135.0, 35.264389682754654], [-45.0, 35.264389682754654]]]}},
  face4_level1: {"type": "Feature", "geometry": {"type": "Polygon", "coordinates": [[[-90.0, 45.0], [-90.0, -0.0], [-135.0, -0.0], [-135.0, 35.264389682754654], [-90.0, 45.0]]]}},
  face4_level2: {"type": "Feature", "geometry": {"type": "Polygon", "coordinates": [[[-112.61986494804043, 42.70938995736147], [-112.61986494804043, 21.037511025421814], [-135.0, 16.416440373585463], [-135.0, 35.264389682754654], [-112.61986494804043, 42.70938995736147]]]}},
};

var hilbertCurves = {
  face0_level0: [[22.619864948040426, -21.037511025421818],
    [22.619864948040426, 21.037511025421818], [-22.619864948040426,
      21.037511025421818], [-22.619864948040426, -21.037511025421818]],
  face0_level1: [[34.5085229876684, -29.532803705822644], [10.619655276155134,
    -34.04786296943431], [10.619655276155134, -10.441798171725758],
    [34.5085229876684, -8.78319498809753], [34.5085229876684,
      8.78319498809753], [34.5085229876684, 29.532803705822644],
    [10.619655276155134, 34.04786296943431], [10.619655276155134,
      10.441798171725758], [-10.619655276155134, 10.441798171725758],
    [-10.619655276155134, 34.04786296943431], [-34.5085229876684,
      29.532803705822644], [-34.5085229876684, 8.78319498809753],
    [-34.5085229876684, -8.78319498809753], [-10.619655276155134,
      -10.441798171725758], [-10.619655276155134, -34.04786296943431],
    [-34.5085229876684, -29.532803705822644]],
  face4_level1: [[-124.50852298766841, -29.532803705822644],
    [-124.50852298766841, -8.78319498809753], [-100.61965527615514,
      -10.441798171725758], [-100.61965527615514, -34.04786296943431],
    [-79.38034472384487, -34.04786296943431], [-55.4914770123316,
      -29.532803705822644], [-55.4914770123316, -8.78319498809753],
    [-79.38034472384487, -10.441798171725758], [-79.38034472384487,
      10.441798171725758], [-55.4914770123316, 8.78319498809753],
    [-55.4914770123316, 29.532803705822644], [-79.38034472384487,
      34.04786296943431], [-100.61965527615514, 34.04786296943431],
    [-100.61965527615514, 10.441798171725758], [-124.50852298766841,
      8.78319498809753], [-124.50852298766841, 29.532803705822644]],
  face4_level2: [[-132.55096026164185, -34.06835417261842],
    [-132.55096026164185, -29.29852784358299], [-127.29720442449373,
      -31.213750380943715], [-127.29720442449373, -36.13867295023819],
    [-121.62830983522124, -38.01192835722662], [-115.66283001554785,
      -39.604989112855726], [-115.66283001554785, -34.472768740918596],
    [-121.62830983522124, -32.966598510076935], [-121.62830983522124,
      -27.672816835345497], [-115.66283001554785, -29.03611542394432],
    [-115.66283001554785, -23.416202699607133], [-121.62830983522124,
      -22.249652996648642], [-127.29720442449373, -20.9175737852817],
    [-127.29720442449373, -26.102022913686614], [-132.55096026164185,
      -24.404180723911935], [-132.55096026164185, -19.49141081197755],
    [-132.55096026164185, -14.674280113001148], [-127.29720442449373,
      -15.78965491871501], [-127.29720442449373, -10.847806468762405],
    [-132.55096026164185, -10.062644416977273], [-132.55096026164185,
      -5.751289735036941], [-132.55096026164185, -1.8130383011509619],
    [-127.29720442449373, -1.957709026102969], [-127.29720442449373,
      -6.207102004601984], [-121.62830983522124, -6.640008371011666],
    [-121.62830983522124, -2.095318178641372], [-115.66283001554785,
      -2.217970358280503], [-115.66283001554785, -7.025285930833536],
    [-115.66283001554785, -12.250150641347645], [-121.62830983522124,
      -11.590965888146943], [-121.62830983522124, -16.839501884455522],
    [-115.66283001554785, -17.765700797063335], [-109.568710311036,
      -18.517606809153214], [-103.5436913322114, -19.064317384033192],
    [-103.5436913322114, -13.180387837346142], [-109.568710311036,
      -12.787880703222456], [-109.568710311036, -7.34052627930265],
    [-109.568710311036, -2.3184620609863367], [-103.5436913322114,
      -2.3920750137387805], [-103.5436913322114, -7.571194668897809],
    [-97.78514014329618, -7.714252526909324], [-97.78514014329618,
      -2.4377643963879136], [-92.4604145385917, -2.458149114290072],
    [-92.4604145385917, -7.778051065823766], [-92.4604145385917,
      -13.531664994073878], [-97.78514014329618, -13.423396998874649],
    [-97.78514014329618, -19.401876146754788], [-92.4604145385917,
      -19.55203910292458], [-92.4604145385917, -25.642207947357],
    [-92.4604145385917, -31.604718973593695], [-97.78514014329618,
      -31.391909433476105], [-97.78514014329618, -25.45632936373666],
    [-103.5436913322114, -25.037640040789977], [-109.568710311036,
      -24.35707669262015], [-109.568710311036, -30.127115762625355],
    [-103.5436913322114, -30.911430421228708], [-103.5436913322114,
      -36.52130173970455], [-109.568710311036, -35.66784542696534],
    [-109.568710311036, -40.85807948120362], [-103.5436913322114,
      -41.74704688465104], [-97.78514014329618, -42.28676535824822],
    [-97.78514014329618, -37.041781613103254], [-92.4604145385917,
      -37.27173479986319], [-92.4604145385917, -42.524635683013194],
    [-87.53958546140831, -42.524635683013194], [-82.21485985670382,
      -42.28676535824822], [-82.21485985670382, -37.041781613103254],
    [-87.53958546140831, -37.27173479986319], [-87.53958546140831,
      -31.604718973593695], [-87.53958546140831, -25.642207947357],
    [-82.21485985670382, -25.45632936373666], [-82.21485985670382,
      -31.391909433476105], [-76.45630866778862, -30.911430421228708],
    [-76.45630866778862, -25.037640040789977], [-70.43128968896401,
      -24.35707669262015], [-70.43128968896401, -30.127115762625355],
    [-70.43128968896401, -35.66784542696534], [-76.45630866778862,
      -36.52130173970455], [-76.45630866778862, -41.74704688465104],
    [-70.43128968896401, -40.85807948120362], [-64.33716998445217,
      -39.604989112855726], [-64.33716998445217, -34.472768740918596],
    [-58.37169016477876, -32.966598510076935], [-58.37169016477876,
      -38.01192835722662], [-52.702795575506265, -36.13867295023819],
    [-47.44903973835816, -34.06835417261842], [-47.44903973835816,
      -29.29852784358299], [-52.702795575506265, -31.213750380943715],
    [-52.702795575506265, -26.102022913686614], [-47.44903973835816,
      -24.404180723911935], [-47.44903973835816, -19.49141081197755],
    [-52.702795575506265, -20.9175737852817], [-58.37169016477876,
      -22.249652996648642], [-58.37169016477876, -27.672816835345497],
    [-64.33716998445217, -29.03611542394432], [-64.33716998445217,
      -23.416202699607133], [-64.33716998445217, -17.765700797063335],
    [-64.33716998445217, -12.250150641347645], [-58.37169016477876,
      -11.590965888146943], [-58.37169016477876, -16.839501884455522],
    [-52.702795575506265, -15.78965491871501], [-47.44903973835816,
      -14.674280113001148], [-47.44903973835816, -10.062644416977273],
    [-52.702795575506265, -10.847806468762405], [-52.702795575506265,
      -6.207102004601984], [-47.44903973835816, -5.751289735036941],
    [-47.44903973835816, -1.8130383011509619], [-52.702795575506265,
      -1.957709026102969], [-58.37169016477876, -2.095318178641372],
    [-58.37169016477876, -6.640008371011666], [-64.33716998445217,
      -7.025285930833536], [-64.33716998445217, -2.217970358280503],
    [-70.43128968896401, -2.3184620609863367], [-76.45630866778862,
      -2.3920750137387805], [-76.45630866778862, -7.571194668897809],
    [-70.43128968896401, -7.34052627930265], [-70.43128968896401,
      -12.787880703222456], [-70.43128968896401, -18.517606809153214],
    [-76.45630866778862, -19.064317384033192], [-76.45630866778862,
      -13.180387837346142], [-82.21485985670382, -13.423396998874649],
    [-82.21485985670382, -19.401876146754788], [-87.53958546140831,
      -19.55203910292458], [-87.53958546140831, -13.531664994073878],
    [-87.53958546140831, -7.778051065823766], [-82.21485985670382,
      -7.714252526909324], [-82.21485985670382, -2.4377643963879136],
    [-87.53958546140831, -2.458149114290072], [-87.53958546140831,
      2.458149114290072], [-82.21485985670382, 2.4377643963879136],
    [-82.21485985670382, 7.714252526909324], [-87.53958546140831,
      7.778051065823766], [-87.53958546140831, 13.531664994073878],
    [-87.53958546140831, 19.55203910292458], [-82.21485985670382,
      19.401876146754788], [-82.21485985670382, 13.423396998874649],
    [-76.45630866778862, 13.180387837346142], [-76.45630866778862,
      19.064317384033192], [-70.43128968896401, 18.517606809153214],
    [-70.43128968896401, 12.787880703222456], [-70.43128968896401,
      7.34052627930265], [-76.45630866778862, 7.571194668897809],
    [-76.45630866778862, 2.3920750137387805], [-70.43128968896401,
      2.3184620609863367], [-64.33716998445217, 2.217970358280503],
    [-64.33716998445217, 7.025285930833536], [-58.37169016477876,
      6.640008371011666], [-58.37169016477876, 2.095318178641372],
    [-52.702795575506265, 1.957709026102969], [-47.44903973835816,
      1.8130383011509619], [-47.44903973835816, 5.751289735036941],
    [-52.702795575506265, 6.207102004601984], [-52.702795575506265,
      10.847806468762405], [-47.44903973835816, 10.062644416977273],
    [-47.44903973835816, 14.674280113001148], [-52.702795575506265,
      15.78965491871501], [-58.37169016477876, 16.839501884455522],
    [-58.37169016477876, 11.590965888146943], [-64.33716998445217,
      12.250150641347645], [-64.33716998445217, 17.765700797063335],
    [-64.33716998445217, 23.416202699607133], [-64.33716998445217,
      29.03611542394432], [-58.37169016477876, 27.672816835345497],
    [-58.37169016477876, 22.249652996648642], [-52.702795575506265,
      20.9175737852817], [-47.44903973835816, 19.49141081197755],
    [-47.44903973835816, 24.404180723911935], [-52.702795575506265,
      26.102022913686614], [-52.702795575506265, 31.213750380943715],
    [-47.44903973835816, 29.29852784358299], [-47.44903973835816,
      34.06835417261842], [-52.702795575506265, 36.13867295023819],
    [-58.37169016477876, 38.01192835722662], [-58.37169016477876,
      32.966598510076935], [-64.33716998445217, 34.472768740918596],
    [-64.33716998445217, 39.604989112855726], [-70.43128968896401,
      40.85807948120362], [-76.45630866778862, 41.74704688465104],
    [-76.45630866778862, 36.52130173970455], [-70.43128968896401,
      35.66784542696534], [-70.43128968896401, 30.127115762625355],
    [-70.43128968896401, 24.35707669262015], [-76.45630866778862,
      25.037640040789977], [-76.45630866778862, 30.911430421228708],
    [-82.21485985670382, 31.391909433476105], [-82.21485985670382,
      25.45632936373666], [-87.53958546140831, 25.642207947357],
    [-87.53958546140831, 31.604718973593695], [-87.53958546140831,
      37.27173479986319], [-82.21485985670382, 37.041781613103254],
    [-82.21485985670382, 42.28676535824822], [-87.53958546140831,
      42.524635683013194], [-92.4604145385917, 42.524635683013194],
    [-92.4604145385917, 37.27173479986319], [-97.78514014329618,
      37.041781613103254], [-97.78514014329618, 42.28676535824822],
    [-103.5436913322114, 41.74704688465104], [-109.568710311036,
      40.85807948120362], [-109.568710311036, 35.66784542696534],
    [-103.5436913322114, 36.52130173970455], [-103.5436913322114,
      30.911430421228708], [-109.568710311036, 30.127115762625355],
    [-109.568710311036, 24.35707669262015], [-103.5436913322114,
      25.037640040789977], [-97.78514014329618, 25.45632936373666],
    [-97.78514014329618, 31.391909433476105], [-92.4604145385917,
      31.604718973593695], [-92.4604145385917, 25.642207947357],
    [-92.4604145385917, 19.55203910292458], [-97.78514014329618,
      19.401876146754788], [-97.78514014329618, 13.423396998874649],
    [-92.4604145385917, 13.531664994073878], [-92.4604145385917,
      7.778051065823766], [-92.4604145385917, 2.458149114290072],
    [-97.78514014329618, 2.4377643963879136], [-97.78514014329618,
      7.714252526909324], [-103.5436913322114, 7.571194668897809],
    [-103.5436913322114, 2.3920750137387805], [-109.568710311036,
      2.3184620609863367], [-109.568710311036, 7.34052627930265],
    [-109.568710311036, 12.787880703222456], [-103.5436913322114,
      13.180387837346142], [-103.5436913322114, 19.064317384033192],
    [-109.568710311036, 18.517606809153214], [-115.66283001554785,
      17.765700797063335], [-121.62830983522124, 16.839501884455522],
    [-121.62830983522124, 11.590965888146943], [-115.66283001554785,
      12.250150641347645], [-115.66283001554785, 7.025285930833536],
    [-115.66283001554785, 2.217970358280503], [-121.62830983522124,
      2.095318178641372], [-121.62830983522124, 6.640008371011666],
    [-127.29720442449373, 6.207102004601984], [-127.29720442449373,
      1.957709026102969], [-132.55096026164185, 1.8130383011509619],
    [-132.55096026164185, 5.751289735036941], [-132.55096026164185,
      10.062644416977273], [-127.29720442449373, 10.847806468762405],
    [-127.29720442449373, 15.78965491871501], [-132.55096026164185,
      14.674280113001148], [-132.55096026164185, 19.49141081197755],
    [-132.55096026164185, 24.404180723911935], [-127.29720442449373,
      26.102022913686614], [-127.29720442449373, 20.9175737852817],
    [-121.62830983522124, 22.249652996648642], [-115.66283001554785,
      23.416202699607133], [-115.66283001554785, 29.03611542394432],
    [-121.62830983522124, 27.672816835345497], [-121.62830983522124,
      32.966598510076935], [-115.66283001554785, 34.472768740918596],
    [-115.66283001554785, 39.604989112855726], [-121.62830983522124,
      38.01192835722662], [-127.29720442449373, 36.13867295023819],
    [-127.29720442449373, 31.213750380943715], [-132.55096026164185,
      29.29852784358299], [-132.55096026164185, 34.06835417261842]],
  full_level0: [[-45.0, -59.491041133797204], [45.0, -59.491041133797204],
    [135.0, -59.491041133797204], [-135.0, -59.491041133797204],
    [-112.61986494804043, -21.037511025421818], [-67.38013505195958,
      -21.037511025421818], [-67.38013505195958, 21.037511025421818],
    [-112.61986494804043, 21.037511025421818], [-157.38013505195957,
      21.037511025421818], [-157.38013505195957, -21.037511025421818],
    [157.38013505195957, -21.037511025421818], [157.38013505195957,
      21.037511025421818], [135.0, 59.491041133797204], [-135.0,
        59.491041133797204], [-45.0, 59.491041133797204], [45.0,
          59.491041133797204], [67.38013505195958, 21.037511025421818],
    [112.61986494804043, 21.037511025421818], [112.61986494804043,
      -21.037511025421818], [67.38013505195958, -21.037511025421818],
    [22.619864948040426, -21.037511025421818], [22.619864948040426,
      21.037511025421818], [-22.619864948040426, 21.037511025421818],
    [-22.619864948040426, -21.037511025421818]],
  full_level1: [[-45.0, -45.80546848134384], [-74.74488129694222,
    -54.52596135026465], [-45.0, -75.14893753114214], [-15.255118703057777,
      -54.52596135026465], [15.255118703057777, -54.52596135026465], [45.0,
        -45.80546848134384], [74.74488129694222, -54.52596135026465], [45.0,
          -75.14893753114214], [135.0, -75.14893753114214],
    [105.25511870305779, -54.52596135026465], [135.0, -45.80546848134384],
    [164.74488129694222, -54.52596135026465], [-164.74488129694222,
      -54.52596135026465], [-135.0, -75.14893753114214], [-105.25511870305779,
        -54.52596135026465], [-135.0, -45.80546848134384],
    [-124.50852298766841, -29.532803705822644], [-124.50852298766841,
      -8.78319498809753], [-100.61965527615514, -10.441798171725758],
    [-100.61965527615514, -34.04786296943431], [-79.38034472384487,
      -34.04786296943431], [-55.4914770123316, -29.532803705822644],
    [-55.4914770123316, -8.78319498809753], [-79.38034472384487,
      -10.441798171725758], [-79.38034472384487, 10.441798171725758],
    [-55.4914770123316, 8.78319498809753], [-55.4914770123316,
      29.532803705822644], [-79.38034472384487, 34.04786296943431],
    [-100.61965527615514, 34.04786296943431], [-100.61965527615514,
      10.441798171725758], [-124.50852298766841, 8.78319498809753],
    [-124.50852298766841, 29.532803705822644], [-145.4914770123316,
      29.532803705822644], [-169.38034472384487, 34.04786296943431],
    [-169.38034472384487, 10.441798171725758], [-145.4914770123316,
      8.78319498809753], [-145.4914770123316, -8.78319498809753],
    [-145.4914770123316, -29.532803705822644], [-169.38034472384487,
      -34.04786296943431], [-169.38034472384487, -10.441798171725758],
    [169.38034472384487, -10.441798171725758], [169.38034472384487,
      -34.04786296943431], [145.4914770123316, -29.532803705822644],
    [145.4914770123316, -8.78319498809753], [145.4914770123316,
      8.78319498809753], [169.38034472384487, 10.441798171725758],
    [169.38034472384487, 34.04786296943431], [145.4914770123316,
      29.532803705822644], [135.0, 45.80546848134384], [105.25511870305779,
        54.52596135026465], [135.0, 75.14893753114214], [164.74488129694222,
          54.52596135026465], [-164.74488129694222, 54.52596135026465],
    [-135.0, 45.80546848134384], [-105.25511870305779, 54.52596135026465],
    [-135.0, 75.14893753114214], [-45.0, 75.14893753114214],
    [-74.74488129694222, 54.52596135026465], [-45.0, 45.80546848134384],
    [-15.255118703057777, 54.52596135026465], [15.255118703057777,
      54.52596135026465], [45.0, 75.14893753114214], [74.74488129694222,
        54.52596135026465], [45.0, 45.80546848134384], [55.4914770123316,
          29.532803705822644], [55.4914770123316, 8.78319498809753],
    [79.38034472384487, 10.441798171725758], [79.38034472384487,
      34.04786296943431], [100.61965527615514, 34.04786296943431],
    [124.50852298766841, 29.532803705822644], [124.50852298766841,
      8.78319498809753], [100.61965527615514, 10.441798171725758],
    [100.61965527615514, -10.441798171725758], [124.50852298766841,
      -8.78319498809753], [124.50852298766841, -29.532803705822644],
    [100.61965527615514, -34.04786296943431], [79.38034472384487,
      -34.04786296943431], [79.38034472384487, -10.441798171725758],
    [55.4914770123316, -8.78319498809753], [55.4914770123316,
      -29.532803705822644], [34.5085229876684, -29.532803705822644],
    [10.619655276155134, -34.04786296943431], [10.619655276155134,
      -10.441798171725758], [34.5085229876684, -8.78319498809753],
    [34.5085229876684, 8.78319498809753], [34.5085229876684,
      29.532803705822644], [10.619655276155134, 34.04786296943431],
    [10.619655276155134, 10.441798171725758], [-10.619655276155134,
      10.441798171725758], [-10.619655276155134, 34.04786296943431],
    [-34.5085229876684, 29.532803705822644], [-34.5085229876684,
      8.78319498809753], [-34.5085229876684, -8.78319498809753],
    [-10.619655276155134, -10.441798171725758], [-10.619655276155134,
      -34.04786296943431], [-34.5085229876684, -29.532803705822644]],
  full_level2: [[-45.0, -40.139521471734966], [-33.11134196037203,
    -44.96817331739243], [-45.0, -52.28170368578864], [-56.88865803962798,
      -44.96817331739243], [-70.50413948681376, -48.3455290041172],
    [-83.97246970447874, -49.86230374719826], [-80.8033441083711,
      -61.01370970683677], [-61.50436138175502, -58.107663646625426], [-45.0,
        -67.22516084280302], [-73.39301942138299, -72.78715789954974], [-45.0,
          -82.86275189869654], [-16.606980578617005, -72.78715789954974],
    [-9.1966558916289, -61.01370970683677], [-28.495638618244982,
      -58.107663646625426], [-19.49586051318624, -48.3455290041172],
    [-6.027530295521266, -49.86230374719826], [6.027530295521266,
      -49.86230374719826], [9.1966558916289, -61.01370970683677],
    [28.495638618244982, -58.107663646625426], [19.49586051318624,
      -48.3455290041172], [33.11134196037203, -44.96817331739243], [45.0,
        -40.139521471734966], [56.88865803962798, -44.96817331739243], [45.0,
          -52.28170368578864], [61.50436138175502, -58.107663646625426],
    [70.50413948681376, -48.3455290041172], [83.97246970447874,
      -49.86230374719826], [80.8033441083711, -61.01370970683677],
    [73.39301942138299, -72.78715789954974], [45.0, -67.22516084280302],
    [16.606980578617005, -72.78715789954974], [45.0, -82.86275189869654],
    [135.0, -82.86275189869654], [163.393019421383, -72.78715789954974],
    [135.0, -67.22516084280302], [106.60698057861701, -72.78715789954974],
    [99.19665589162891, -61.01370970683677], [96.02753029552127,
      -49.86230374719826], [109.49586051318624, -48.3455290041172],
    [118.49563861824498, -58.107663646625426], [135.0, -52.28170368578864],
    [123.11134196037203, -44.96817331739243], [135.0, -40.139521471734966],
    [146.88865803962798, -44.96817331739243], [160.50413948681376,
      -48.3455290041172], [151.50436138175502, -58.107663646625426],
    [170.8033441083711, -61.01370970683677], [173.97246970447875,
      -49.86230374719826], [-173.97246970447875, -49.86230374719826],
    [-160.50413948681376, -48.3455290041172], [-151.50436138175502,
      -58.107663646625426], [-170.8033441083711, -61.01370970683677],
    [-163.393019421383, -72.78715789954974], [-135.0, -82.86275189869654],
    [-106.60698057861701, -72.78715789954974], [-135.0, -67.22516084280302],
    [-118.49563861824498, -58.107663646625426], [-99.19665589162891,
      -61.01370970683677], [-96.02753029552127, -49.86230374719826],
    [-109.49586051318624, -48.3455290041172], [-123.11134196037203,
      -44.96817331739243], [-135.0, -52.28170368578864], [-146.88865803962798,
        -44.96817331739243], [-135.0, -40.139521471734966],
    [-129.9812346589189, -32.722232466945606], [-118.673146489435,
      -36.34237313080051], [-118.673146489435, -25.63226655107013],
    [-129.9812346589189, -22.73590953009369], [-129.9812346589189,
      -12.815663319793147], [-129.9812346589189, -3.881312186924027],
    [-118.673146489435, -4.442038523400337], [-118.673146489435,
      -14.599413425030418], [-106.53483785734517, -15.886262361665889],
    [-106.53483785734517, -4.851647556935839], [-95.05986884626412,
      -5.040252729758283], [-95.05986884626412, -16.473902200167128],
    [-95.05986884626412, -28.579068550989312], [-106.53483785734517,
      -27.666225182415854], [-106.53483785734517, -38.794595155857685],
    [-95.05986884626412, -39.87112800298822], [-84.94013115373588,
      -39.87112800298822], [-84.94013115373588, -28.579068550989312],
    [-73.46516214265485, -27.666225182415854], [-73.46516214265485,
      -38.794595155857685], [-61.326853510565, -36.34237313080051],
    [-50.018765341081114, -32.722232466945606], [-50.018765341081114,
      -22.73590953009369], [-61.326853510565, -25.63226655107013],
    [-61.326853510565, -14.599413425030418], [-50.018765341081114,
      -12.815663319793147], [-50.018765341081114, -3.881312186924027],
    [-61.326853510565, -4.442038523400337], [-73.46516214265485,
      -4.851647556935839], [-73.46516214265485, -15.886262361665889],
    [-84.94013115373588, -16.473902200167128], [-84.94013115373588,
      -5.040252729758283], [-84.94013115373588, 5.040252729758283],
    [-84.94013115373588, 16.473902200167128], [-73.46516214265485,
      15.886262361665889], [-73.46516214265485, 4.851647556935839],
    [-61.326853510565, 4.442038523400337], [-50.018765341081114,
      3.881312186924027], [-50.018765341081114, 12.815663319793147],
    [-61.326853510565, 14.599413425030418], [-61.326853510565,
      25.63226655107013], [-50.018765341081114, 22.73590953009369],
    [-50.018765341081114, 32.722232466945606], [-61.326853510565,
      36.34237313080051], [-73.46516214265485, 38.794595155857685],
    [-73.46516214265485, 27.666225182415854], [-84.94013115373588,
      28.579068550989312], [-84.94013115373588, 39.87112800298822],
    [-95.05986884626412, 39.87112800298822], [-106.53483785734517,
      38.794595155857685], [-106.53483785734517, 27.666225182415854],
    [-95.05986884626412, 28.579068550989312], [-95.05986884626412,
      16.473902200167128], [-95.05986884626412, 5.040252729758283],
    [-106.53483785734517, 4.851647556935839], [-106.53483785734517,
      15.886262361665889], [-118.673146489435, 14.599413425030418],
    [-118.673146489435, 4.442038523400337], [-129.9812346589189,
      3.881312186924027], [-129.9812346589189, 12.815663319793147],
    [-129.9812346589189, 22.73590953009369], [-118.673146489435,
      25.63226655107013], [-118.673146489435, 36.34237313080051],
    [-129.9812346589189, 32.722232466945606], [-140.01876534108112,
      32.722232466945606], [-140.01876534108112, 22.73590953009369],
    [-151.326853510565, 25.63226655107013], [-151.326853510565,
      36.34237313080051], [-163.46516214265486, 38.794595155857685],
    [-174.9401311537359, 39.87112800298822], [-174.9401311537359,
      28.579068550989312], [-163.46516214265486, 27.666225182415854],
    [-163.46516214265486, 15.886262361665889], [-174.9401311537359,
      16.473902200167128], [-174.9401311537359, 5.040252729758283],
    [-163.46516214265486, 4.851647556935839], [-151.326853510565,
      4.442038523400337], [-151.326853510565, 14.599413425030418],
    [-140.01876534108112, 12.815663319793147], [-140.01876534108112,
      3.881312186924027], [-140.01876534108112, -3.881312186924027],
    [-151.326853510565, -4.442038523400337], [-151.326853510565,
      -14.599413425030418], [-140.01876534108112, -12.815663319793147],
    [-140.01876534108112, -22.73590953009369], [-140.01876534108112,
      -32.722232466945606], [-151.326853510565, -36.34237313080051],
    [-151.326853510565, -25.63226655107013], [-163.46516214265486,
      -27.666225182415854], [-163.46516214265486, -38.794595155857685],
    [-174.9401311537359, -39.87112800298822], [-174.9401311537359,
      -28.579068550989312], [-174.9401311537359, -16.473902200167128],
    [-163.46516214265486, -15.886262361665889], [-163.46516214265486,
      -4.851647556935839], [-174.9401311537359, -5.040252729758283],
    [174.9401311537359, -5.040252729758283], [163.46516214265486,
      -4.851647556935839], [163.46516214265486, -15.886262361665889],
    [174.9401311537359, -16.473902200167128], [174.9401311537359,
      -28.579068550989312], [174.9401311537359, -39.87112800298822],
    [163.46516214265486, -38.794595155857685], [163.46516214265486,
      -27.666225182415854], [151.326853510565, -25.63226655107013],
    [151.326853510565, -36.34237313080051], [140.01876534108112,
      -32.722232466945606], [140.01876534108112, -22.73590953009369],
    [140.01876534108112, -12.815663319793147], [151.326853510565,
      -14.599413425030418], [151.326853510565, -4.442038523400337],
    [140.01876534108112, -3.881312186924027], [140.01876534108112,
      3.881312186924027], [140.01876534108112, 12.815663319793147],
    [151.326853510565, 14.599413425030418], [151.326853510565,
      4.442038523400337], [163.46516214265486, 4.851647556935839],
    [174.9401311537359, 5.040252729758283], [174.9401311537359,
      16.473902200167128], [163.46516214265486, 15.886262361665889],
    [163.46516214265486, 27.666225182415854], [174.9401311537359,
      28.579068550989312], [174.9401311537359, 39.87112800298822],
    [163.46516214265486, 38.794595155857685], [151.326853510565,
      36.34237313080051], [151.326853510565, 25.63226655107013],
    [140.01876534108112, 22.73590953009369], [140.01876534108112,
      32.722232466945606], [135.0, 40.139521471734966], [146.88865803962798,
        44.96817331739243], [135.0, 52.28170368578864], [123.11134196037203,
          44.96817331739243], [109.49586051318624, 48.3455290041172],
    [96.02753029552127, 49.86230374719826], [99.19665589162891,
      61.01370970683677], [118.49563861824498, 58.107663646625426], [135.0,
        67.22516084280302], [106.60698057861701, 72.78715789954974], [135.0,
          82.86275189869654], [163.393019421383, 72.78715789954974],
    [170.8033441083711, 61.01370970683677], [151.50436138175502,
      58.107663646625426], [160.50413948681376, 48.3455290041172],
    [173.97246970447875, 49.86230374719826], [-173.97246970447875,
      49.86230374719826], [-170.8033441083711, 61.01370970683677],
    [-151.50436138175502, 58.107663646625426], [-160.50413948681376,
      48.3455290041172], [-146.88865803962798, 44.96817331739243], [-135.0,
        40.139521471734966], [-123.11134196037203, 44.96817331739243], [-135.0,
          52.28170368578864], [-118.49563861824498, 58.107663646625426],
    [-109.49586051318624, 48.3455290041172], [-96.02753029552127,
      49.86230374719826], [-99.19665589162891, 61.01370970683677],
    [-106.60698057861701, 72.78715789954974], [-135.0, 67.22516084280302],
    [-163.393019421383, 72.78715789954974], [-135.0, 82.86275189869654],
    [-45.0, 82.86275189869654], [-16.606980578617005, 72.78715789954974],
    [-45.0, 67.22516084280302], [-73.39301942138299, 72.78715789954974],
    [-80.8033441083711, 61.01370970683677], [-83.97246970447874,
      49.86230374719826], [-70.50413948681376, 48.3455290041172],
    [-61.50436138175502, 58.107663646625426], [-45.0, 52.28170368578864],
    [-56.88865803962798, 44.96817331739243], [-45.0, 40.139521471734966],
    [-33.11134196037203, 44.96817331739243], [-19.49586051318624,
      48.3455290041172], [-28.495638618244982, 58.107663646625426],
    [-9.1966558916289, 61.01370970683677], [-6.027530295521266,
      49.86230374719826], [6.027530295521266, 49.86230374719826],
    [19.49586051318624, 48.3455290041172], [28.495638618244982,
      58.107663646625426], [9.1966558916289, 61.01370970683677],
    [16.606980578617005, 72.78715789954974], [45.0, 82.86275189869654],
    [73.39301942138299, 72.78715789954974], [45.0, 67.22516084280302],
    [61.50436138175502, 58.107663646625426], [80.8033441083711,
      61.01370970683677], [83.97246970447874, 49.86230374719826],
    [70.50413948681376, 48.3455290041172], [56.88865803962798,
      44.96817331739243], [45.0, 52.28170368578864], [33.11134196037203,
        44.96817331739243], [45.0, 40.139521471734966], [50.018765341081114,
          32.722232466945606], [61.326853510565, 36.34237313080051],
    [61.326853510565, 25.63226655107013], [50.018765341081114,
      22.73590953009369], [50.018765341081114, 12.815663319793147],
    [50.018765341081114, 3.881312186924027], [61.326853510565,
      4.442038523400337], [61.326853510565, 14.599413425030418],
    [73.46516214265485, 15.886262361665889], [73.46516214265485,
      4.851647556935839], [84.94013115373588, 5.040252729758283],
    [84.94013115373588, 16.473902200167128], [84.94013115373588,
      28.579068550989312], [73.46516214265485, 27.666225182415854],
    [73.46516214265485, 38.794595155857685], [84.94013115373588,
      39.87112800298822], [95.05986884626412, 39.87112800298822],
    [95.05986884626412, 28.579068550989312], [106.53483785734517,
      27.666225182415854], [106.53483785734517, 38.794595155857685],
    [118.673146489435, 36.34237313080051], [129.9812346589189,
      32.722232466945606], [129.9812346589189, 22.73590953009369],
    [118.673146489435, 25.63226655107013], [118.673146489435,
      14.599413425030418], [129.9812346589189, 12.815663319793147],
    [129.9812346589189, 3.881312186924027], [118.673146489435,
      4.442038523400337], [106.53483785734517, 4.851647556935839],
    [106.53483785734517, 15.886262361665889], [95.05986884626412,
      16.473902200167128], [95.05986884626412, 5.040252729758283],
    [95.05986884626412, -5.040252729758283], [95.05986884626412,
      -16.473902200167128], [106.53483785734517, -15.886262361665889],
    [106.53483785734517, -4.851647556935839], [118.673146489435,
      -4.442038523400337], [129.9812346589189, -3.881312186924027],
    [129.9812346589189, -12.815663319793147], [118.673146489435,
      -14.599413425030418], [118.673146489435, -25.63226655107013],
    [129.9812346589189, -22.73590953009369], [129.9812346589189,
      -32.722232466945606], [118.673146489435, -36.34237313080051],
    [106.53483785734517, -38.794595155857685], [106.53483785734517,
      -27.666225182415854], [95.05986884626412, -28.579068550989312],
    [95.05986884626412, -39.87112800298822], [84.94013115373588,
      -39.87112800298822], [73.46516214265485, -38.794595155857685],
    [73.46516214265485, -27.666225182415854], [84.94013115373588,
      -28.579068550989312], [84.94013115373588, -16.473902200167128],
    [84.94013115373588, -5.040252729758283], [73.46516214265485,
      -4.851647556935839], [73.46516214265485, -15.886262361665889],
    [61.326853510565, -14.599413425030418], [61.326853510565,
      -4.442038523400337], [50.018765341081114, -3.881312186924027],
    [50.018765341081114, -12.815663319793147], [50.018765341081114,
      -22.73590953009369], [61.326853510565, -25.63226655107013],
    [61.326853510565, -36.34237313080051], [50.018765341081114,
      -32.722232466945606], [39.98123465891889, -32.722232466945606],
    [39.98123465891889, -22.73590953009369], [28.673146489434995,
      -25.63226655107013], [28.673146489434995, -36.34237313080051],
    [16.534837857345156, -38.794595155857685], [5.059868846264116,
      -39.87112800298822], [5.059868846264116, -28.579068550989312],
    [16.534837857345156, -27.666225182415854], [16.534837857345156,
      -15.886262361665889], [5.059868846264116, -16.473902200167128],
    [5.059868846264116, -5.040252729758283], [16.534837857345156,
      -4.851647556935839], [28.673146489434995, -4.442038523400337],
    [28.673146489434995, -14.599413425030418], [39.98123465891889,
      -12.815663319793147], [39.98123465891889, -3.881312186924027],
    [39.98123465891889, 3.881312186924027], [28.673146489434995,
      4.442038523400337], [28.673146489434995, 14.599413425030418],
    [39.98123465891889, 12.815663319793147], [39.98123465891889,
      22.73590953009369], [39.98123465891889, 32.722232466945606],
    [28.673146489434995, 36.34237313080051], [28.673146489434995,
      25.63226655107013], [16.534837857345156, 27.666225182415854],
    [16.534837857345156, 38.794595155857685], [5.059868846264116,
      39.87112800298822], [5.059868846264116, 28.579068550989312],
    [5.059868846264116, 16.473902200167128], [16.534837857345156,
      15.886262361665889], [16.534837857345156, 4.851647556935839],
    [5.059868846264116, 5.040252729758283], [-5.059868846264116,
      5.040252729758283], [-16.534837857345156, 4.851647556935839],
    [-16.534837857345156, 15.886262361665889], [-5.059868846264116,
      16.473902200167128], [-5.059868846264116, 28.579068550989312],
    [-5.059868846264116, 39.87112800298822], [-16.534837857345156,
      38.794595155857685], [-16.534837857345156, 27.666225182415854],
    [-28.673146489434995, 25.63226655107013], [-28.673146489434995,
      36.34237313080051], [-39.98123465891889, 32.722232466945606],
    [-39.98123465891889, 22.73590953009369], [-39.98123465891889,
      12.815663319793147], [-28.673146489434995, 14.599413425030418],
    [-28.673146489434995, 4.442038523400337], [-39.98123465891889,
      3.881312186924027], [-39.98123465891889, -3.881312186924027],
    [-39.98123465891889, -12.815663319793147], [-28.673146489434995,
      -14.599413425030418], [-28.673146489434995, -4.442038523400337],
    [-16.534837857345156, -4.851647556935839], [-5.059868846264116,
      -5.040252729758283], [-5.059868846264116, -16.473902200167128],
    [-16.534837857345156, -15.886262361665889], [-16.534837857345156,
      -27.666225182415854], [-5.059868846264116, -28.579068550989312],
    [-5.059868846264116, -39.87112800298822], [-16.534837857345156,
      -38.794595155857685], [-28.673146489434995, -36.34237313080051],
    [-28.673146489434995, -25.63226655107013], [-39.98123465891889,
      -22.73590953009369], [-39.98123465891889, -32.722232466945606]]
}
