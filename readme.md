SIRCLO Recruitment Technical Test
---

General Information
---
This is a technical test for SIRCLO's Summer 2022 Recruitment. The problem is as stated on this [gist](https://gist.github.com/fandywie/12323549d2f8c202853018118b6054a7). Any feedback or suggestion are welcomed.


User Manual
---
### Prerequisites
First, you need to have any package manager installed. pnpm is preferred (or else, you would be having [this trouble](https://stackoverflow.com/a/55990047/13018015)), but any package manager should do just fine.

Then, run the following command to install the necessary packages:

```
pnpm install
```

### Running the Program
Once you have finished installing the dependencies, run the command below to start the program:
```
pnpm start
```

Once finished, the expected output would be:
```
Pisang Hijau (2)
Apel Merah (7)
```

### Testing the Program
Run the command below to test the program
```
pnpm test
```

or, if you'd like to display the coverage for the test, you could also run:
```
pnpm test:cov
```

Lesson Learned
---
1. This is my first time using pnpm, and i can say that it is considerably faster than npm/yarn.
2. Regarding tsc and running ts program with ts-node (https://stackoverflow.com/a/51456915/13018015)
