/* data needed for e-bikes REST API application */
CREATE TABLE
	ebikes (
		id int NOT NULL AUTO_INCREMENT,
		manufacturer varchar(35) NOT NULL,
		model varchar(35) NOT NULL,
		zero_60 float,
		topspeed int,
		curb_weight int,
		horsepower int,
		torque int,
		price_start float,
		picture varchar(100),
		wiki varchar(400),
		website varchar(400),
		promo_video varchar(400),
		summary MEDIUMTEXT,
		PRIMARY KEY (id)
	);

/* Code Separator | Create Table above. | Populate data below. */
INSERT INTO
	ebikes (
		manufacturer,
		model,
		zero_60,
		topspeed,
		curb_weight,
		horsepower,
		torque,
		price_start,
		picture,
		wiki,
		website,
		promo_video,
		summary
	)
VALUES
	(
		'Lightning',
		'LS-218',
		2,
		218,
		495,
		244,
		220,
		38988,
		'images/lightning-ls-218-lightning.avif',
		'https://en.wikipedia.org/wiki/Lightning_LS-218',
		'https://lightningmotorcycle.com/ls-218/',
		'https://www.youtube.com/watch?v=hEbcw90isPc',
		'The Lightning LS-218 is considered among the fastest production electric motorcycles that can do 218 MPH. It can accelerate from 0-60 MPH in under 2 seconds thanks to its IPM liquid-cooled electric motor belting out 244 horsepower and 220 pound-feet of torque. It is powered by a 380V 15 kWh battery pack with a healthy range of 188 miles per charge.'
	),
	(
		'Damon',
		'HyperSport Premier',
		3,
		200,
		440,
		200,
		150,
		40000,
		'images/damon-hypersport-premier.avif',
		'N/A',
		'https://damon.com/hypersport',
		'https://www.youtube.com/watch?v=atnGOAPg_Yg',
		'The Damon HyperSport Premier is another prime example of a superfast electric sports bike that is capable of doing 200 MPH with a combined range of 200 miles. The bike comes with a monocoque-built HyperDrive powertrain that is integrated into the frame for reduced weight, better balance, and low maintenance. It is powered by a direct oil-cooled IPM motor which makes 200 horsepower and 150 pound-feet of torque to propel the bike from 0-60 MPH in under 3 seconds.'
	),
	(
		'Energica',
		'Ego+ RS',
		2.6,
		150,
		273,
		169,
		164,
		26650,
		'images/energica-ego-rs.avif',
		'https://en.wikipedia.org/wiki/Energica_Ego',
		'https://shop.energicamotor.com/en/pages/energica-ego',
		'https://www.youtube.com/watch?v=Wtq779W6vuk',
		'Another well-known electric motorcycle manufacturer is Energica with over 10 years of experience, renowned for making high-performance, reliable electric bikes. It produces many models and the Ego+ RS version is its latest flagship sports bike, which is capable of reaching a maximum speed of 150 MPH.'
	),
	(
		'Evoke',
		'6061',
		3.6,
		143,
		530,
		120,
		163,
		24995,
		'images/evoke-6061.avif',
		'https://en.wikipedia.org/wiki/Evoke_Motorcycles',
		'https://www.evokemotorcycles.com/6061-gt',
		'https://www.youtube.com/watch?v=fYmU3_C3TRw',
		'There are not many electric cruisers, and the Evoke 6061 stands out among the sea of regular electric bikes. The bike was designed to offer the best ride comfort and blistering performance, going from 0-60 MPH in 3.6 seconds thanks to the liquid-cooled 90kW motor. The beefy motor produces 120 horsepower and 163 pounds-feet of peak torque, allowing the bike to reach a top speed of 143 MPH without breaking a sweat.  Additionally, the 29.8 kWh largest battery capacity offers a staggering 410 miles (claimed) of city range and 306 miles of combined range. That’s not all either. The DC fast charger tops up the battery in as little as 30 minutes so that you can get back on the road as quickly as possible.'
	),
	(
		'Volt',
		'Lacama',
		3.4,
		143,
		483,
		148,
		170,
		35722,
		'images/2024-italian-volt-lacama.avif',
		'N/A',
		'https://italianvolt.it/en/',
		'https://www.youtube.com/watch?v=ztDuEj3NPPc',
		'The high-performance bespoke electric motorcycle in the form of Italian Volt Lacama, can potentially be built to your specifications. Although the bike has been in development for some time, it is coming to the showroom floor in a matter of months, having been on display at ECIMA 2023.  An Axial Flux PMS electric motor powers the Lacama and sends power to the back wheel via a carbon belt. It has an amazing maximum range of 160 miles thanks to a Tazzari EV fluid battery system with Samsung cells and BMS Tazzari EV technology. It also has an electronic reverse gear, a 5-inch TFT display, traction control, ABS, an electric steering lock, a keyless entry system, four levels of adjustable regenerative braking, and a Launch Control System.'
	),
	(
		'Fuell',
		'Fllow',
		3.5,
		135,
		400,
		48,
		553,
		10495,
		'images/2024-fuell-fllow.avif',
		'https://en.wikipedia.org/wiki/Erik_Buell#FUELL_e-vehicle_partnership',
		'https://fuell.com/products/fuell-fllow-e-motorcycle',
		'https://www.youtube.com/watch?v=fRkxxniA6TI',
		'The Fuell Fllow is the result of Erik Buell\'s prolific engineering genius. The electric engine, which is located on the back wheel and features a magnesium monocoque chassis and battery housing, generates an incredible 553 pound-feet of torque. With a range of 150 miles, the maximum sustained speed is 85 MPH, while its on-demand top speed is 135 MPH.  The Fllow uses regenerative braking, and a full charge takes 30 minutes when using a CCS Type 2 charger. What was formerly the petrol tank now holds 1.76 cubic feet of storage, which Fuell claims is large enough to accommodate a soft bag and a full-face helmet.'
	),
	(
		'Verge',
		'TS Ultra',
		2.5,
		125,
		540,
		201,
		885,
		44900,
		'images/verge-ts-ultra-side.avif',
		'N/A',
		'https://www.vergemotorcycles.com/mc_en/ts-ultra/',
		'https://www.youtube.com/watch?v=zMUdykPuTMA',
		'The Verge TS Ultra has a modern design to reflect the future of electric motorcycles with a hubless electric motor. The electric motor is integrated into the rear wheel, to create more space for the battery pack. As a result, this allows for very good weight distribution, making the bike more nimble. Since the motor is integrated into the back wheel, all the 885 pounds-feet of torque is transferred to the rear and straight to the road.'
	),
	(
		'Arc',
		'Vector',
		3.2,
		124,
		529,
		117,
		128,
		120000,
		'images/arc-vector.avif',
		'https://en.wikipedia.org/wiki/Arc_Vector',
		'https://www.arcvehicle.com/vector',
		'https://www.youtube.com/watch?v=NRKWiX4yGdI',
		'The Arc Vector is the most expensive production electric bike on this list with a starting (approximate) price of $120,000 and one of the most unique café racer-inspired designs. Its modular battery monocoque platform features carbon fiber swingarms, Öhlins dampers, and Brembo Stylema brakes.  This handmade British motorcycle has an electronically limited top speed of 124 MPH and offers a range of over 270 miles. It can be fast charged, up to 90%, in just about 40 minutes, thanks to the CCS DC charger option. Claiming to be the world\'s most advanced electric bike, it comes with a Human Machine Interface with an Arc Pilot System heads-up display helmet and Origin Jacket with active feedback.'
	),
	(
		'Davinci',
		'DC100',
		3,
		124,
		562,
		135,
		627,
		27500,
		'images/davinci-dc100.avif',
		'N/A',
		'https://global.davincimotor.com/models/davinci-dc-100',
		'https://www.youtube.com/watch?v=B0R6zHjhaTU',
		'With its futuristic appearance and exceptional performance, the Davinci DC100 exudes an air of sophistication. The DC 100 electric motor, like all others, is renowned for its instantaneous, enormous torque. It can go from 0 to 60 MPH in around 3 seconds thanks to the massive 627 pound-feet of torque. The bike\'s abundance of electronic sensors, which include more than 1000 processors and 200 sensors to track data to improve rider safety, is its best feature.  Furthermore, according to estimates from the Worldwide Harmonised Light Vehicle Test Procedure (WLTP), it can go 223 miles on a single charge. With a Stage 3 charger, you are able to charge an 85 percent battery in 15 minutes and a 100 percent battery in just 30 minutes.'
	),
	(
		'LiveWire',
		'Del Mar S2',
		3,
		124,
		436,
		80,
		184,
		15499,
		'images/livewire_del_mar_s2.avif',
		'https://en.wikipedia.org/wiki/LiveWire_(company)',
		'https://www.livewire.com/en-ca/s2-del-mar-electric-motorcycle',
		'https://www.youtube.com/watch?v=eK9yY5iCD7Y',
		'With its modular Arrow platform design, the Del Mar is the very first in a planned line of models targeted directly at the mass market for electric motorcycles. To generate multiple configurations, the frame has various steering heads and swing arms fastened to it in addition to the battery, electronics, and electric motor.  It is now available for purchase and claims to have an 84 horsepower power output and weighs 436 pounds. The predicted city range is 110 miles, and it will take around 75 minutes to charge from 0% to 80%. Well, it has got the credentials of Harley-Davidson behind it.'
	),
	(
		'Zero',
		'SR-S',
		3.3,
		124,
		518,
		110,
		140,
		20995,
		'images/zero-sr-s-6.avif',
		'N/A',
		'https://www.zeromotorcycle.eu/en/motorcycle/srs/',
		'https://www.youtube.com/watch?v=oHisXbxHkFE',
		'Zero is among the leading electric motorcycle manufacturers in the world and makes some of the best high-performance bikes. Its flagship sportbike SR/S starts at $23,995 and can reach a top speed of 124 MPH thanks to its latest direct drive Z-force 75-10 motor. The powerful motor delivers 140 pounds-feet of torque and 110 horsepower.  It goes from 0-60 MPH in around 3.3 seconds. The bike can have a city range of 187 miles and a combined range of 142 miles thanks to its larger 17.3 kWh Z-Force lithium-ion battery. The bike comes packed with modern electronics and safety features, including stability control from Bosch.'
	),
	(
		'Tarform',
		'Luna',
		3.8,
		120,
		440,
		75,
		120,
		42000,
		'images/tarform-luna.avif',
		'N/A',
		'https://www.tarform.com/luna/',
		'https://www.youtube.com/watch?v=uGXa-cI2tto',
		'The Luna from Tarform comes in two forms, the Luna Scrambler with a classic round headlight, and knobby all-terrain tires, while the Luna Racer is more of a café racer style with sporty acceleration and roadster handling. It features an air-cooled electric motor capable of producing 75 horsepower and 120 pound-feet of torque, enabling the bike to accelerate from 0-60 MPH in 3.8 seconds and achieve a top speed of 120 MPH.  The 11.2 kWh lithium-ion battery pack offers 100 miles of city range and can be recharged from 0% in around 2 hours on a level two 220v or J1772 charging unit. Not only is it an eco-friendly electric bike, but it also incorporates sustainability with about 55 percent of the parts made of recycled materials.'
	),
	(
		'LiveWire',
		'One',
		3,
		110,
		562,
		100,
		84,
		22799,
		'images/livewire_one.avif',
		'https://en.wikipedia.org/wiki/LiveWire_(motorcycle)',
		'https://www.youtube.com/watch?v=xD6O9yIfmiI',
		'https://www.livewire.com/en-ca/livewire-one-electric-motorcycle',
		'Starting off the list is the LiveWire One from Harley-Davidson, its first electric motorcycle released in 2019. The bike is capable of reaching a top speed of 110 MPH thanks to its Revelation powertrain that delivers 100 horsepower and 84 pound-feet of torque. The powerful motor helps the bike go from 0 to 60 MPH in about 3 seconds.  Its lightweight cast aluminum frame and low center of gravity help deliver excellent handling. The bike offers a confident city range of 146 miles and a healthy 95 miles of combined range, with linear and constant acceleration. With DC fast charging, its 15.4 kWh battery gets juiced up in 60 minutes, while it takes around 11 hours to charge at a standard 110v outlet.'
	)