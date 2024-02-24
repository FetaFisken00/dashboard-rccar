'use client'
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/q2oFntzmdBE
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { ResponsiveBar } from "@nivo/bar"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { ResponsiveLine } from "@nivo/line"

export function Mockup2() {
  return (
    <Card key="1" className="w-full max-w-6xl p-4">
      <div className="grid gap-4 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader className="flex items-center gap-4">
              <div className="flex flex-col">
                <CardTitle className="text-base">Speed</CardTitle>
                <CardDescription className="text-xs">Current speed of the vehicle</CardDescription>
              </div>
              <GaugeIcon className="w-12 h-12 ml-auto" />
            </CardHeader>
            <CardContent className="flex items-end pb-4">
              <div className="grid w-full aspect-square items-center">
                <div className="aspect-inner">
                  <BarChart className="aspect-1" />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1 ml-4 text-2xl">
                <span>120</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Max: 180</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center gap-4">
              <div className="flex flex-col">
                <CardTitle className="text-base">Battery</CardTitle>
                <CardDescription className="text-xs">Battery information</CardDescription>
              </div>
              <BatteryIcon className="w-12 h-12 ml-auto" />
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Battery Voltage</TableHead>
                    <TableHead>Power Out</TableHead>
                    <TableHead>Amp Used</TableHead>
                    <TableHead>Est. Time Left</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>12V</TableCell>
                    <TableCell>80W</TableCell>
                    <TableCell>5A</TableCell>
                    <TableCell>2 hours</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader className="flex items-center gap-4">
              <div className="flex flex-col">
                <CardTitle className="text-base">RPM</CardTitle>
                <CardDescription className="text-xs">Engine revolutions per minute</CardDescription>
              </div>
              <GaugeIcon className="w-12 h-12 ml-auto" />
            </CardHeader>
            <CardContent className="flex items-end pb-4">
              <div className="grid w-full aspect-square items-center">
                <div className="aspect-inner">
                  <FilledtimeseriesChart className="w-full aspect-[1/1]" />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1 ml-4 text-2xl">
                <span>9000</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Max: 10000</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center gap-4">
              <div className="flex flex-col">
                <CardTitle className="text-base">Topdown View of Car</CardTitle>
                <CardDescription className="text-xs">Bars on every wheel</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full" />
                <div className="w-16 h-16 bg-gray-300 rounded-full" />
                <div className="w-16 h-16 bg-gray-300 rounded-full" />
                <div className="w-16 h-16 bg-gray-300 rounded-full" />
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="grid gap-4">
          <CardHeader className="flex items-center gap-4">
            <div className="flex flex-col">
              <CardTitle className="text-base">Tire Pressure</CardTitle>
              <CardDescription className="text-xs">Real-time tire pressure for each tire</CardDescription>
            </div>
            <GaugeIcon className="w-12 h-12 ml-auto" />
          </CardHeader>
          <CardContent className="flex items-center p-0">
            <BarChart className="w-full aspect-[2/1]" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center gap-4">
            <div className="flex flex-col">
              <CardTitle className="text-base">Acceleration Tile</CardTitle>
              <CardDescription className="text-xs">Circle with a dot to represent lateral g forces</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="flex items-center justify-center p-4">
            <div className="w-24 h-24 bg-gray-300 rounded-full relative">
              <div className="w-4 h-4 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </CardContent>
        </Card>
      </div>
    </Card>
  )
}


function GaugeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}


function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}


function BatteryIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
      <line x1="22" x2="22" y1="11" y2="13" />
    </svg>
  )
}


function FilledtimeseriesChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        curve="monotoneX"
        enableArea={true}
        gridYValues={6}
        defs={[
          {
            id: "line-chart-gradient",
            type: "linearGradient",
            colors: [
              { offset: 0, color: "inherit" },
              { offset: 200, color: "inherit", opacity: 0 },
            ],
          },
        ]}
        fill={[{ match: "*", id: "line-chart-gradient" }]}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}