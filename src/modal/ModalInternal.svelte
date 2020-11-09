<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { cubicIn, cubicOut, expoIn, expoOut, quadIn, quintOut } from "svelte/easing";

  import { springFrames } from "svelte-helpers/animation";

  const frames = [
    -30,
    -27,
    -22.35,
    -17.0925,
    -11.965875,
    -7.43698125,
    -3.749502187499999,
    -0.9776905781249985,
    0.921756025781252,
    2.0642207157421897,
    2.6004006926425802,
    2.688877608363576,
    2.477499842745866,
    2.0923543108197675,
    1.6327742839858268,
    1.1707698381451825,
    0.7533899645342454,
    0.40675405023371175,
    0.14076530091499367,
    -0.046203916233672454,
    -0.1631135157569382,
    -0.2227934038713671,
    -0.23930599075860917,
    -0.2261085731594556,
    -0.1949193944040602,
    -0.15515448877264718,
    -0.11379185123496399,
    -0.07552695171197352,
    -0.043102071850832355,
    -0.017715692756007363,
    0.0005570229312296185,
    0.012378585834810694,
    0.018824743138657323,
    0.0211322710722919,
    0.020518937121925183,
    0.018068376341994298,
    0.014668674200839792,
    0.010992000389005385,
    0.007502962372412482,
    0,
  ];

  const frames2 = [
    -30,
    -30.110879999987187,
    -27.17198444350015,
    -22.544612575371307,
    -17.282449782000768,
    -12.133868117908952,
    -7.573951759930835,
    -3.852641247059028,
    -1.0485406995514355,
    0.8789745321208462,
    2.043965495393875,
    2.5968212478439354,
    2.696505749437077,
    2.4916608865519065,
    2.109355603664899,
    1.6499300468442724,
    1.1863170299466237,
    0.765387812344531,
    0.4152481012199683,
    0.1461341398594102,
    -0.04340276447433389,
    -0.16226164945489202,
    -0.22329440879336326,
    -0.2406371546616688,
    -0.2278471865585189,
    -0.1967499000243656,
    -0.15686246077432983,
    -0.11525000663421653,
    -0.07667737177974795,
    -0.04393772865585563,
    -0.018263363510654634,
    0.00025123713133740067,
    0.01226060484044701,
    0.018840682409742904,
    0.021233739951540615,
    0.02066593829351485,
    0.01823035605019977,
    0.014824264908449226,
    0.011127938472526067,
    0.007612576953677317,
    0,
  ];

  const modalInBouncyFrames = [
    -30,
    -37.20270000008118,
    -23.283849054093423,
    -2.5951370891357968,
    12.15004232991279,
    15.659630788184597,
    10.111361084584765,
    1.4495074621742017,
    -4.905422133330529,
    -6.583513412186014,
    -4.382647707617329,
    -0.7608487987931492,
    1.973729674363165,
    2.7643803193266776,
    1.8961683664960136,
    0.3837843372753955,
    -0.7911497746689578,
    -1.1592978830938034,
    -0.8189683979807154,
    -0.18828641303480598,
    0.31579631796917706,
    0.4855582500635375,
    0.3531340920581052,
    0.09049840600736103,
    -0.1254621829611829,
    -0.20310798355380444,
    -0.1520278243217777,
    -0.042814849216557135,
    0.04958015291313039,
    0.08484781944392045,
    0.0653495899233622,
    0.02000225276511683,
    -0.019474242725245748,
    -0.03539723291621309,
    -0.02804926802689347,
    -0.009249017820749567,
    0.007595468743262321,
    0,
  ];

  const springEasing = (frames, out = false) => t => {
    t = out ? 1 - t : t;
    const indexPrecise = t * frames.length;
    const indexExcess = indexPrecise % 1;

    const index = ~~indexPrecise;

    const a = frames[index];
    const b = frames[index + 1] ?? a;
    return indexExcess ? a + (b - a) * indexExcess : a;
  };

  function springIn(from, to, springOptions){
    return springToEasing(false, from, to, springOptions);
  }

  function springOut(from, to, springOptions){
    return springToEasing(true, from, to, springOptions);
  }

  function springToEasing(out, from, to, springOptions) {
    const frames = springFrames(from, to, springOptions)
    return {
      duration: (frames.length * 1000) / 60,
      easing: springEasing(frames),
    };
  }

  const { easing: modalSpringIn, duration } = springIn(-30, 0, { stiffness: 0.1, damping: 0.35, precision: 0.01 });

  let root;
  export let node;

  onMount(() => {
    root.appendChild(node);
  });

  //const modalSpringBouncyIn = springEasing(modalInBouncyFrames);

  function modalIn() {
    return {
      duration: duration,
      css: t => {
        const transformY = modalSpringIn(t);
        const opacity = expoOut(t);
        console.log({ transformY, t });

        return `
          transform: translate3d(0px, ${transformY}px, 0px);
          opacity: ${opacity};
        `;
      },
    };
  }

  function modalOut() {
    return {
      duration: 250,
      css: t => {
        const easedTransform = cubicIn(t);
        const easedOpacity = quintOut(t);

        console.log(t, easedTransform, easedOpacity);

        return `
          transform: translate3d(0px, ${(1 - easedTransform) * 30}px, 0px);
          opacity: ${easedOpacity};
        `;
      },
    };
  }
</script>

<style>
  .xxxmodal {
    transform: translate3d(0, -90px, 0);
  }
</style>

<div class="modal" in:modalIn out:modalOut bind:this={root}>
  <slot />
</div>
